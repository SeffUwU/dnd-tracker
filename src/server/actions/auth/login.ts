"use server";

import { CookieConstants } from "@/constants/cookie.constants";
import { IUser, users } from "@/entities";
import { ServerActionError } from "@/helpers/errors/base.error";
import { JwtHelper } from "@/helpers/jwt/jwt.helper";
import { ServerActionResponse } from "@/helpers/responses/base.response";
import { HttpStatusCode } from "@/helpers/responses/response.status";
import { ActionResponse } from "@/helpers/responses/response.type";
import { ErrorCode } from "@/locale/error.codes";
import { AllowedLocale } from "@/locale/error.messages";
import { ConnectionManager } from "@/server/connection.manager";
import bcrypt from "bcrypt";
import { and, eq } from "drizzle-orm";
import { cookies } from "next/headers";

export const login = async ({
  login,
  password,
}: {
  login: string;
  password: string;
}): Promise<ActionResponse<Omit<IUser, "passwordHash">>> => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const foundUser =
    await ConnectionManager.getConnection().query.users.findFirst({
      where: and(
        eq(users.login, login),
        eq(users.passwordHash, hashedPassword)
      ),
    });

  if (!foundUser) {
    return ServerActionError(
      HttpStatusCode.Conflict,
      ErrorCode.UsernameTaken,
      AllowedLocale.en
    );
  }

  const { passwordHash, ...savedUser } = foundUser;
  const userCookies = await cookies();
  const token = await JwtHelper.sign(savedUser);

  userCookies.set(CookieConstants.JwtKey, token, CookieConstants.JwtOptions());

  return ServerActionResponse(HttpStatusCode.Ok, savedUser);
};
