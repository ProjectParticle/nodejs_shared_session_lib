/**
 * Backend driver
 */

import { SessionObject } from '../dto/session_object.dto';

export interface BackendDriver {

  checkExistenceBySessionId(sessionId: string): Promise<boolean>;
  fetchBySessionId(sessionId: string): Promise<SessionObject>;

  create(sessionObject: SessionObject): Promise<boolean>;
  update(sessionId: string, sessionObject: SessionObject): Promise<SessionObject>;
  delete(sessionId: string): Promise<void>;
}
