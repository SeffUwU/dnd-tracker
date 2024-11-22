import { EnglishLocale } from "./messages/en";
import { RussianLocale } from "./messages/ru";
import { TextCode } from "./text.codes";

export enum AllowedLocale {
  en = "en",
  ru = "ru",
}

export const TextLocaleMap: Record<AllowedLocale, Record<TextCode, string>> = {
  en: EnglishLocale,
  ru: RussianLocale,
};
