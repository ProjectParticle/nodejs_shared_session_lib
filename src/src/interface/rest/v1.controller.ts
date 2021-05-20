/**
 * /api/v1
 */

import { Controller, Delete, Get, Head, HttpCode, NotFoundException, Param, ParseUUIDPipe, Post, Put, Req } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { Request } from 'express';

/* Command/Query */
import { CreateNewSessionCommand } from '../../shared/command/create_new.command';
import { DeleteBySessionIdCommand } from '../../shared/command/delete_by_session_id.command';
import { ExistsBySessionIdCommand } from '../../shared/command/exists_by_session_id.command';
import { FetchBySessionIdCommand } from '../../shared/command/fetch_by_session_id.command';
import { UpdateSessionByIdCommand } from '../../shared/command/update_by_session_id.command';

/* Models */
import { SessionObject } from '../../shared/dto/session_object.dto';
import { SessionObjectHttpResponse } from './v1.dto';

@Controller('/api/v1')
export class V1Controller {

  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) { }

  protected readBodyAsString(req: Request): string | undefined {
    return req.readable ? req.read(req.readableLength).toString() : null
  }

  @Head('/:sessionId')
  async checkSessionExistenceById(
    @Param('sessionId', ParseUUIDPipe) sessionId: string
  ): Promise<void> {
    // check existence
    const sessionExists = await this.queryBus.execute(new ExistsBySessionIdCommand(sessionId));

    // not found, 404 please
    if (sessionExists === false) { throw new NotFoundException(); }
  }

  @Post('/')
  @HttpCode(200)
  async createNewSession(
    @Req() req: Request
  ): Promise<SessionObjectHttpResponse> {
    // create the session
    const sessionObject: SessionObject = await this.commandBus.execute(
      new CreateNewSessionCommand(
        this.readBodyAsString(req)
      )
    );

    // map to HTTP response
    return new SessionObjectHttpResponse(
      sessionObject.sessionId,
      sessionObject.expiry,
      sessionObject.data
    );
  }

  @Put('/:sessionId')
  async setSessionValue(
    @Param('sessionId', ParseUUIDPipe) sessionId: string,
    @Req() req: Request,
  ): Promise<SessionObjectHttpResponse> {

    // update the session
    const sessionObject: SessionObject = await this.commandBus.execute(new UpdateSessionByIdCommand(
      sessionId,
      this.readBodyAsString(req)
    ));

    // map to HTTP response
    return new SessionObjectHttpResponse(
      sessionObject.sessionId,
      sessionObject.expiry,
      sessionObject.data
    );
  }

  @Get('/:sessionId')
  async fetchSessionById(
    @Param('sessionId', ParseUUIDPipe) sessionId: string
  ): Promise<SessionObjectHttpResponse> {
    // fetch the session
    const sessionObject: SessionObject | undefined = await this.queryBus.execute(new FetchBySessionIdCommand(sessionId));

    // not found, 404 please
    if (sessionObject === undefined) { throw new NotFoundException(); }

    // map to HTTP response
    return new SessionObjectHttpResponse(
      sessionObject.sessionId,
      sessionObject.expiry,
      sessionObject.data
    );
  }

  @Delete('/:sessionId')
  async deleteBySessionId(
    @Param('sessionId', ParseUUIDPipe) sessionId: string
  ): Promise<void> {
    await this.commandBus.execute(new DeleteBySessionIdCommand(sessionId));
  }
}