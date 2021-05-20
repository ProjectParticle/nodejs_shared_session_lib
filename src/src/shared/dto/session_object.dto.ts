/**
 * Session Object DTO
 */

export class SessionObject {

  constructor(
    public readonly sessionId: string,
    public readonly expiry: {
      readonly createdAt: string,
      readonly expiresIn: string,
    },
    public readonly data: any
  ) { }
}
