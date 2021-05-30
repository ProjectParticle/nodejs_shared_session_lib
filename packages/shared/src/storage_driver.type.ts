/**
 * Storage driver interface
 */

import { SessionModel } from './session.model';

export interface StorageDriver {

  /**
   * Save a session model in the storage
   * @param sessionModel Session model to save
   */
  save(sessionModel: SessionModel): Promise<SessionModel>;

  /**
   * Delete a session by its ID
   * @param sessionId Target session ID
   */
  deleteBySessionId(sessionId: string): Promise<SessionModel>;

  /**
   * Fetche a session by its ID
   * @param sessionId Target session ID
   */
  fetchBySessionId(sessionId: string): Promise<SessionModel | undefined>;
  
  /**
   * Check existence of a session
   * @param sessionId Target session ID
   */
  existsBySessionId(sessionId: string): Promise<boolean>;
}