"use server";

import { IUser } from "@/entities/user.entity";
import { ServerActionResponse } from "@/helpers/responses/base.response";
import { HttpStatusCode } from "@/helpers/responses/response.status";
import { ActionResponse } from "@/helpers/responses/response.type";
import { omitFields } from "@/helpers/transform/omit";
import { ConnectionManager } from "@/server/connection.manager";
import { cookies } from "next/headers";

export async function getUsers(): ActionResponse<
  Omit<IUser, "passwordHash">[]
> {
  const foundUsers = (
    await ConnectionManager.getConnection().query.users.findMany()
  ).map((v) => omitFields(v, ["passwordHash"]));

  return ServerActionResponse(HttpStatusCode.Ok, foundUsers);
}
