import { campaigns, users, usersToCampaigns } from '@/entities';
import { db } from '@/server/database';
import chalk from 'chalk';
import { campaignFixture } from './fixtures/fixture-campaigns';
import { usersFixture } from './fixtures/fixture-users';
import { sql } from 'drizzle-orm';

const seed = async () => {
  // Users
  const [firstUser, secondUser, thirdUser, fourthUser, fifthUser] = await db
    .insert(users)
    .values(usersFixture)
    .returning();
  // Campaigns
  const [firstCampaign, secondCampaign] = await db
    .insert(campaigns)
    .values(campaignFixture(firstUser, secondUser))
    .returning();
  // Relations
  await db.insert(usersToCampaigns).values([
    // 1st campaign
    { campaignId: firstCampaign.id, userId: secondUser.id },
    { campaignId: firstCampaign.id, userId: thirdUser.id },
    { campaignId: firstCampaign.id, userId: fourthUser.id },
    // 2nd campaign
    { campaignId: secondCampaign.id, userId: firstUser.id },
    { campaignId: secondCampaign.id, userId: fifthUser.id },
    { campaignId: secondCampaign.id, userId: thirdUser.id },
  ]);
};

seed()
  .then(() => {
    console.log(chalk.green('Seeding successful'));
    process.exit(0);
  })
  .catch((err) => {
    console.error('Error seeding db', err);
    process.exit(1);
  });
