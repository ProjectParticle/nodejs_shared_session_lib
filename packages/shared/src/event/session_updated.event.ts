/**
 * Event / Session Updated
 */

import { SessionData } from '../session_data.type';

export class SessionUpdatedEvent {

  constructor(
    readonly sessionId: string,
    readonly previousValue: SessionData,
    readonly updatedValue: SessionData
  ) { }
}
