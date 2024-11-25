import { campaigns, users, usersToCampaigns } from '@/entities';
import { db } from '@/server/database';
import chalk from 'chalk';
import { sql } from 'drizzle-orm';

const dropData = async () => {
  await db.delete(users).where(sql`1 = 1`);
  await db.delete(usersToCampaigns).where(sql`1 = 1`);
  await db.delete(campaigns).where(sql`1 = 1`);
};

process.stdin.on('data', function (data) {
  if (data.toString().trim() === 'y' || data.toString().trim() === 'yes') {
    dropData()
      .then(() => {
        console.log(chalk.green('Data dropped.'));
        process.exit(0);
      })
      .catch((err) => console.error('Error dropping data', err));
  } else if (data.toString().trim() === 'n' || data.toString().trim() === 'no') {
    process.exit(0);
  } else {
    ask();
  }
});

function ask() {
  process.stdout.write(chalk.red('WARNING! THIS WILL DROP ALL YOUR DATA IN DB!') + chalk.yellow('\nContinue (y/n)?\n'));
}

ask();
