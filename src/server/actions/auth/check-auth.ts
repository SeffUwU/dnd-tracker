"use server";

import { CookieConstants } from "@/constants/cookie.constants";
import { ServerActionError } from "@/helpers/errors/base.error";
import { JwtHelper } from "@/helpers/jwt/jwt.helper";
import { ServerActionResponse } from "@/helpers/responses/base.response";
import { HttpStatusCode } from "@/helpers/responses/response.status";
import { ActionResponse } from "@/helpers/responses/response.type";
import { ErrorCode } from "@/locale/error.codes";
import { cookies } from "next/headers";

export async function checkAuth(): ActionResponse<boolean> {
  const userCookies = await cookies();
  const token = userCookies.get(CookieConstants.JwtKey);

  if (!token) {
    return ServerActionError(
      HttpStatusCode.Unauthorized,
      ErrorCode.NotAuthorized
    );
  }

  try {
    const result = await JwtHelper.verify(token.value);

    if (!result.exp || Date.now() >= result.exp * 1000) {
      return ServerActionError(
        HttpStatusCode.Unauthorized,
        ErrorCode.TokenExpired
      );
    }

    return ServerActionResponse(HttpStatusCode.Ok, true);
  } catch (err) {
    return ServerActionError(
      HttpStatusCode.Unauthorized,
      ErrorCode.TokenExpired
    );
  }
}
