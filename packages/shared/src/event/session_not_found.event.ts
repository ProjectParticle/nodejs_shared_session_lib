/**
 * Event / Session Not Found
 */

export class SessionNotFoundEvent {

  constructor(
    readonly sessionId: string
  ) { }
}

