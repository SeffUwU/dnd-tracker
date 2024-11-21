"use server";

import { User } from "@/entities/user.entity";
import { ConnectionManager } from "@/server/connection.manager";

export async function getUsers(): Promise<User[]> {
  const users = await ConnectionManager.getConnection()
    .manager.getRepository(User)
    .find();

  return users.map((user) => user.toJSON());
}
