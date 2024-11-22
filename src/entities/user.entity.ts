import { localeEnum, schema } from "@/entities/schema";
import { AllowedLocale } from "@/locale/error.messages";
import { index, uuid, varchar } from "drizzle-orm/pg-core";

export const users = schema.table(
  "users",
  {
    id: uuid().defaultRandom().primaryKey(),
    name: varchar(),
    login: varchar(),
    passwordHash: varchar(),
    locale: localeEnum().default(AllowedLocale.en),
  },
  (t) => [index("users_id_pkey").on(t.id)]
);

export type IUser = typeof users.$inferSelect;
