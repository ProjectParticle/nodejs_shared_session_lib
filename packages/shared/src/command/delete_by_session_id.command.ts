/**
 * Command / Delete By Session ID
 */

export class DeleteBySessionIdCommand {

  constructor(
    readonly sessionId: string
  ) { }
}
