/**
 * Event / Session Created
 */

import { SessionData } from '../session_data.type';

export class SessionCreatedEvent {
  constructor(
    readonly sessionId: string,
    readonly data: SessionData
  ) { }
}
