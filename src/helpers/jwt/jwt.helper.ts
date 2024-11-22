import { TokenPayload } from "@/types/jwt/token.payload.type";
import jwt, { Jwt, JwtPayload } from "jsonwebtoken";

export class JwtHelper {
  private static secret = process.env.JWT_SECRET;

  static sign(data: TokenPayload): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        data,
        JwtHelper.secret,
        { expiresIn: process.env.JWT_EXPIRES_IN },
        (err, encoded) => {
          if (err || !encoded) {
            return reject(err);
          }

          resolve(encoded);
        }
      );
    });
  }

  static verify(token: string): Promise<TokenPayload & JwtPayload> {
    return new Promise((resolve, reject) => {
      jwt.verify(token, JwtHelper.secret, (err, res) => {
        if (err || !res) {
          return reject(err);
        }

        resolve(res as TokenPayload);
      });
    });
  }
}
