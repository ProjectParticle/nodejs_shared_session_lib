/**
 * Redis driver
 */

import { Injectable } from '@nestjs/common';
import { SessionObject } from 'src/shared/dto/session_object.dto';

import { BackendDriver } from '../shared/type/backend_driver';

@Injectable()
export class RedisBackendDriver implements BackendDriver {

  constructor() {}

  checkExistenceBySessionId(sessionId: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  fetchBySessionId(sessionId: string): Promise<SessionObject> {
    throw new Error('Method not implemented.');
  }

  create(sessionObject: SessionObject): Promise<boolean> {
    throw new Error('Method not implemented.');
  }

  update(sessionId: string, sessionObject: SessionObject): Promise<SessionObject> {
    throw new Error('Method not implemented.');
  }
  
  delete(sessionId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
