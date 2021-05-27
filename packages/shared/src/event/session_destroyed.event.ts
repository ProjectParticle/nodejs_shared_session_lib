/**
 * Event / Session Destroyed
 */

export class SessionDestroyedEvent {

  constructor(
    readonly sessionId: string,
  ) { }
}
