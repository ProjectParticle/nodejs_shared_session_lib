/**
 * Event / Session Created
 */

import { SessionData } from '../type/session_data';

export class SessionCreatedEvent {
  constructor(
    readonly sessionId: string,
    readonly data: SessionData
  ) { }
}
