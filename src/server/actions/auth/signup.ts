'use server';

import { CookieConstants } from '@/constants/cookie.constants';
import { IUser, users } from '@/entities';
import { ServerActionError } from '@/helpers/errors/base.error';
import { JwtHelper } from '@/helpers/jwt/jwt.helper';
import { HttpStatusCode } from '@/helpers/responses/response.status';
import { ActionResponse } from '@/helpers/responses/response.type';
import { db } from '@/server/database';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import { ErrorCode } from '@/types/enums/error-code.enum';
import bcrypt from 'bcrypt';
import { randomUUID } from 'crypto';
import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function signup({
  login,
  password,
}: {
  login: string;
  password: string;
}): ActionResponse<Omit<IUser, 'passwordHash'>> {
  const foundUser = await db.query.users.findFirst({
    where: eq(users.login, login),
  });

  if (foundUser) {
    return ServerActionError(HttpStatusCode.Conflict, ErrorCode.UsernameTaken, AllowedLocale.en);
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const [{ passwordHash, ...savedUser }] = await db
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

  redirect('/');

  // return ServerActionResponse(HttpStatusCode.Created, savedUser);
}
