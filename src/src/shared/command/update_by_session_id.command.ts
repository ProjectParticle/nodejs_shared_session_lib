
export class UpdateSessionByIdCommand {

  constructor(
    readonly sessionId: string,
    readonly data: any
  ) {}
}