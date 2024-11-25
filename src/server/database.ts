import { config } from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "../entities";

config({ path: ".env" });

export const db = drizzle(
  `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB}`,
  { schema }
);
