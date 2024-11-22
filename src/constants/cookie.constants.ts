import { ResponseCookie } from "next/dist/compiled/@edge-runtime/cookies";

export const CookieConstants = {
  JwtKey: "_rtk",
  JwtExpiresIn: 1000 * 60 * 60 * 24, // ~1 day
  JwtOptions(): Partial<ResponseCookie> {
    return {
      httpOnly: true,
      expires: new Date(Date.now() + this.JwtExpiresIn),
      sameSite: true,
    };
  },
};
