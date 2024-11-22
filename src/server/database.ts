import { configDotenv } from "dotenv";
import "reflect-metadata";
import { DataSource } from "typeorm";
import { UsedEntities } from "../entities";

configDotenv();

export const createDataSource = (): DataSource => {
  return new DataSource({
    type: "postgres",
    database: process.env.POSTGRES_DB,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    port: Number(process.env.POSTGRES_PORT) || 5432,
    host: process.env.POSTGRES_HOST,
    poolSize: 10,
    entities: UsedEntities,
    // migrations: [__dirname + "/../migrations/*{.ts,.js}"],
    migrations: [
      __filename.includes(".next")
        ? "./instrumentation.js"
        : __dirname + "/../migrations/*{.ts,.js}",
    ],
  });
};

export default createDataSource;
