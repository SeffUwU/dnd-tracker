"use server";

import { IUser } from "@/entities/user.entity";
import { protect } from "@/helpers/auth/protect.action";
import { ServerActionResponse } from "@/helpers/responses/base.response";
import { HttpStatusCode } from "@/helpers/responses/response.status";
import { ActionResponse } from "@/helpers/responses/response.type";
import { omitFields } from "@/helpers/transform/omit";
import { ConnectionManager } from "@/server/connection.manager";

/**
 * Get users. With pagination. Self explanatory.
 */
export const getUsers = protect(
  async (
    page?: number,
    take?: number
  ): ActionResponse<Omit<IUser, "passwordHash">[]> => {
    const foundUsers = (
      await ConnectionManager.getConnection().query.users.findMany(
        page && take
          ? {
              offset: Math.max(page - 1, 0) * take,
              limit: take,
            }
          : undefined
      )
    ).map((v) => omitFields(v, ["passwordHash"]));

    return ServerActionResponse(HttpStatusCode.Ok, foundUsers);
  }
);
