"use server";

import { CookieConstants } from "@/constants/cookie.constants";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const logout = async (): Promise<void> => {
  const userCookies = await cookies();
  userCookies.delete(CookieConstants.JwtKey);
  redirect("/auth/sign-in");
  // return ServerActionResponse(HttpStatusCode.Ok, true);
};
