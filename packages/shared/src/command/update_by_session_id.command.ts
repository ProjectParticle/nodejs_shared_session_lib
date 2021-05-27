/**
 * Command / Update By Session Id
 */

import { SessionData } from '../type/session_data';

export class UpdateSessionByIdCommand {

  constructor(
    readonly sessionId: string,
    readonly data: SessionData
  ) {}
}