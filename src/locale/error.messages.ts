import { ErrorCode } from "./error.codes";
import { EnglishErrorMessages } from "./errors/en";
import { RussianErrorMessages } from "./errors/ru";

export enum AllowedLocale {
  en = "en",
  ru = "ru",
}

export const ErrorCodeMessage: Record<
  AllowedLocale,
  Record<ErrorCode, string>
> = {
  en: EnglishErrorMessages,
  ru: RussianErrorMessages,
};
