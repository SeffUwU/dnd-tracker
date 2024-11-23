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
import { randomUUID } from "crypto";
import { eq } from "drizzle-orm";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signup({
  login,
  password,
}: {
  login: string;
  password: string;
}): ActionResponse<Omit<IUser, "passwordHash">> {
  const foundUser =
    await ConnectionManager.getConnection().query.users.findFirst({
      where: eq(users.login, login),
    });

  if (foundUser) {
    return ServerActionError(
      HttpStatusCode.Conflict,
      ErrorCode.UsernameTaken,
      AllowedLocale.en
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const [{ passwordHash, ...savedUser }] =
    await ConnectionManager.getConnection()
      .insert(users)
      .values({
        name: `user-${randomUUID()}`,
        login,
        passwordHash: hashedPassword,
      })
      .returning();
  const userCookies = await cookies();
  const token = await JwtHelper.sign(savedUser);

  userCookies.set(CookieConstants.JwtKey, token, CookieConstants.JwtOptions());

  redirect("/");

  // return ServerActionResponse(HttpStatusCode.Created, savedUser);
}
