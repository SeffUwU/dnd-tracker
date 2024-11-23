import { EnglishLocale } from "./messages/en";
import { RussianLocale } from "./messages/ru";

export enum AllowedLocale {
  en = "en",
  ru = "ru",
}

export const TextLocaleMap: Record<AllowedLocale, typeof EnglishLocale> = {
  en: EnglishLocale,
  ru: RussianLocale,
};
