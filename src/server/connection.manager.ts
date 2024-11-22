// DO NOT SHARE THIS IN ANY WAY ON THE FRONT END!!! ONLY THRU SERVER ACTIONS

import createDataSource from "./database";
type ConnectionType = ReturnType<typeof createDataSource>;

// Im not sure if this is needed now that i use drizzle instead of typeorm
export class ConnectionManager {
  static connection?: ConnectionType;

  static getConnection() {
    if (ConnectionManager.connection) {
      return ConnectionManager.connection;
    }

    ConnectionManager.connection = createDataSource();

    return ConnectionManager.connection;
  }

  static async restartConnection() {
    if (ConnectionManager.connection) {
      ConnectionManager.connection = undefined;
    }

    return ConnectionManager.getConnection();
  }
}
