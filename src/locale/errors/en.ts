import { ErrorCode } from "../error.codes";

export const EnglishErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.UsernameTaken]: "Username taken",
  [ErrorCode.NotAuthorized]: "Not authorized",
  [ErrorCode.TokenExpired]: "Session expired",
  [ErrorCode.UserNotFound]: "User not found",
};
