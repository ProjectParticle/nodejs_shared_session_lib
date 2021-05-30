/**
 * Session model
 */

import { SessionData } from './session_data.type';

export class SessionModel {

  constructor(
    readonly id: string,
    readonly data: SessionData,
  ) { }
}
