import { localeEnum, schema } from "@/entities/schema";
import { AllowedLocale } from "@/locale/error.messages";
import { relations } from "drizzle-orm";
import { index, uuid, varchar } from "drizzle-orm/pg-core";
import { usersToCampaigns } from "./campaign.entity";

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

export const usersRelations = relations(users, ({ many }) => ({
  usersToGroups: many(usersToCampaigns),
}));

export type IUser = typeof users.$inferSelect;
