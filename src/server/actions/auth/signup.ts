"use server";

import { User } from "@/entities/user.entity";
import { ServerActionError } from "@/helpers/errors/base.error";
import { ErrorCode } from "@/locale/error.codes";
import { AllowedLocale } from "@/locale/error.messages";
import { ServerActionResponse } from "@/helpers/responses/base.response";
import { HttpStatusCode } from "@/helpers/responses/response.status";
import { ActionResponse } from "@/helpers/responses/response.type";
import { ConnectionManager } from "@/server/connection.manager";
import bcrypt from "bcrypt";
import { randomUUID } from "crypto";

export async function signup({
  login,
  password,
}: {
  login: string;
  password: string;
}): ActionResponse<{
  name: string;
  login: string;
  id: string;
  locale: string;
  updatedAt: Date;
  createdAt: Date;
}> {
  const userRepository = ConnectionManager.getRepository(User);

  const foundUser = await userRepository.findOne({
    where: {
      name: login,
    },
  });

  if (foundUser) {
    return ServerActionError(
      HttpStatusCode.Conflict,
      ErrorCode.UsernameTaken,
      AllowedLocale.en
    );
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const { passwordHash: _, ...savedUser } = await userRepository.save({
    name: `user-${randomUUID()}`,
    login,
    passwordHash,
  });

  return ServerActionResponse(HttpStatusCode.Created, savedUser);
}
