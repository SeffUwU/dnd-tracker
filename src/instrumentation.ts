import chalk from "chalk";
import { UsedEntities } from "./entities";
import { User } from "./entities/user.entity";
import { ConnectionManager } from "./server/connection.manager";

export async function register() {
  console.log("========== TypeORM ==========");
  console.log(chalk.yellow("Starting the process of entity initialization"));

  const entities = UsedEntities.map((e) => e.name);
  console.log(
    chalk.yellow(
      `Entities to initialize: [${chalk.green(entities.join(", "))}]`
    )
  );

  const ds = await ConnectionManager.initialize();
  console.log(chalk.green("Initialization complete."));

  console.log(chalk.yellow("Testing connection.."));

  await ds.getRepository(User).find({
    take: 1,
  });

  console.log(
    chalk.green("Repositories are initialized and connection is stable")
  );
  console.log("=============================");
}
