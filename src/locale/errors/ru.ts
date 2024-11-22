import { ErrorCode } from "../error.codes";

export const RussianErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.UsernameTaken]: "Данное имя уже занято",
  [ErrorCode.NotAuthorized]: "Не авторизован",
  [ErrorCode.TokenExpired]: "Сессия устарела",
  [ErrorCode.UserNotFound]: "Пользователь не найден",
};
