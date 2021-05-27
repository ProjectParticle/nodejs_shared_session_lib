/**
 * Command / create new session
 */

import { SessionData } from '../type/session_data';

export class CreateNewSessionCommand {
  constructor(
    readonly sessionId?: string,
    readonly data?: SessionData,
  ) { }
}
