import { ErrorCode } from "../error.codes";

export const RussianErrorMessages: Record<ErrorCode, string> = {
  [ErrorCode.UsernameTaken]: "Данное имя уже занято",
};
