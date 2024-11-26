import { localeEnum, schema } from '@/entities/schema';
import { relations } from 'drizzle-orm';
import { index, timestamp, uuid, varchar } from 'drizzle-orm/pg-core';
import { usersToCampaigns } from './campaign.entity';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';

export const users = schema.table(
  'users',
  {
    id: uuid().defaultRandom().primaryKey(),
    name: varchar().notNull(),
    login: varchar().notNull().unique(),
    passwordHash: varchar().notNull(),
    locale: localeEnum().default(AllowedLocale.en),
    uiLocale: localeEnum().default(AllowedLocale.en),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at')
      .defaultNow()
      .$onUpdateFn(() => new Date()),
  },
  (t) => [index('users_id_pkey').on(t.id)],
);

export const usersRelations = relations(users, ({ many }) => ({
  usersToGroups: many(usersToCampaigns),
}));

export type IUser = typeof users.$inferSelect;
