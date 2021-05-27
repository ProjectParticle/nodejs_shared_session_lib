/**
 * Event / Session Updated
 */

import { SessionData } from '../type/session_data';

export class SessionUpdatedEvent {

  constructor(
    readonly sessionId: string,
    readonly previousValue: SessionData,
    readonly updatedValue: SessionData
  ) { }
}
