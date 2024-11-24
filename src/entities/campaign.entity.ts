import { schema } from "@/entities/schema";
import { index, primaryKey, text, uuid, varchar } from "drizzle-orm/pg-core";
import { users } from "./user.entity";
import { relations } from "drizzle-orm";

export const campaigns = schema.table(
  "campaigns",
  {
    id: uuid().defaultRandom().primaryKey(),
    name: varchar().notNull(),
    description: text(),
    creatorId: uuid()
      .references(() => users.id)
      .notNull(),
  },
  (t) => [index("campaigns_id_pkey").on(t.id)]
);

export const campaignsRelations = relations(campaigns, ({ one, many }) => ({
  user: one(users, { fields: [campaigns.creatorId], references: [users.id] }),
  usersToCampaigns: many(usersToCampaigns),
}));

export const usersToCampaigns = schema.table(
  "users_to_campaigns",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    campaignId: uuid("campaign_id")
      .notNull()
      .references(() => campaigns.id),
  },
  (t) => ({
    pk: primaryKey({ columns: [t.userId, t.campaignId] }),
  })
);

export const usersToCampaignsRelations = relations(
  usersToCampaigns,
  ({ one }) => ({
    campaign: one(campaigns, {
      fields: [usersToCampaigns.campaignId],
      references: [campaigns.id],
    }),
    user: one(users, {
      fields: [usersToCampaigns.userId],
      references: [users.id],
    }),
  })
);

export type ICampaign = typeof campaigns.$inferSelect;
export type WithCreator<T> = T & typeof usersToCampaigns.$inferInsert;
