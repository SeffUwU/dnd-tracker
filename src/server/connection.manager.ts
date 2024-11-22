// DO NOT SHARE THIS IN ANY WAY ON THE FRONT END!!! ONLY THRU SERVER ACTIONS

import { DataSource, EntityTarget, ObjectLiteral, Repository } from "typeorm";
import createDataSource from "./database";

export class ConnectionManager {
  static connection?: DataSource;

  static getConnection() {
    if (ConnectionManager.connection) {
      return ConnectionManager.connection;
    }

    ConnectionManager.connection = createDataSource();

    return ConnectionManager.connection;
  }

  static async restartConnection() {
    if (ConnectionManager.connection) {
      ConnectionManager.connection.destroy();
      ConnectionManager.connection = undefined;
    }

    return ConnectionManager.getConnection();
  }

  static initialize(): Promise<DataSource> {
    return ConnectionManager.getConnection().initialize();
  }

  static getRepository<Entity extends ObjectLiteral>(
    target: EntityTarget<Entity>
  ): Repository<Entity> {
    return ConnectionManager.getConnection().getRepository(target);
  }
}
