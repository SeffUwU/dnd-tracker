"use server";

import { User } from "@/entities/user.entity";
import { ConnectionManager } from "@/server/connection.manager";

export async function createUser(): Promise<void> {
  ConnectionManager.getConnection()
    .manager.getRepository(User)
    .create({
      name: "test",
      passwordHash: "test",
    })
    .save();
}
