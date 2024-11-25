'use server';

import { CookieConstants } from '@/constants/cookie.constants';
import { users } from '@/entities';
import { ServerActionError } from '@/helpers/errors/base.error';
import { JwtHelper } from '@/helpers/jwt/jwt.helper';
import { ServerActionResponse } from '@/helpers/responses/base.response';
import { HttpStatusCode } from '@/helpers/responses/response.status';
import { ActionResponse } from '@/helpers/responses/response.type';
import { db } from '@/server/database';
import { ErrorCode } from '@/types/enums/error-code.enum';
import { TokenPayload } from '@/types/jwt/token.payload.type';
import { eq } from 'drizzle-orm';
import { cookies } from 'next/headers';

export async function checkAuth(): ActionResponse<{
  user: TokenPayload;
}> {
  const userCookies = await cookies();
  const token = userCookies.get(CookieConstants.JwtKey);

  if (!token) {
    return ServerActionError(HttpStatusCode.Unauthorized, ErrorCode.NotAuthorized);
  }

  try {
    const result = await JwtHelper.verify(token.value);

    // TODO: handle refresh automatically :D
    if (!result.exp || Date.now() >= result.exp * 1000) {
      return ServerActionError(HttpStatusCode.Unauthorized, ErrorCode.TokenExpired);
    }

    // TODO: add cache
    const dbUser = await db.query.users.findFirst({ where: eq(users.id, result.id) });
    return ServerActionResponse(HttpStatusCode.Ok, { user: { ...result, ...dbUser, passwordHash: undefined } });
  } catch (err) {
    return ServerActionError(HttpStatusCode.Unauthorized, ErrorCode.TokenExpired);
  }
}
