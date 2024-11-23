import { localeEnum, schema } from "@/entities/schema";
import { AllowedLocale } from "@/locale/error.messages";
import { index, uuid, varchar } from "drizzle-orm/pg-core";

export const users = schema.table(
  "users",
  {
    id: uuid().defaultRandom().primaryKey(),
    name: varchar().notNull(),
    login: varchar().notNull(),
    passwordHash: varchar().notNull(),
    locale: localeEnum().default(AllowedLocale.en),
  },
  (t) => [index("users_id_pkey").on(t.id)]
);

export type IUser = typeof users.$inferSelect;
