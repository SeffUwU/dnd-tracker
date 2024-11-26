import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import { EnglishLocale } from './text/en';
import { RussianLocale } from './text/ru';

export const LocaleMap: Record<AllowedLocale, typeof EnglishLocale> = {
  en: EnglishLocale,
  ru: RussianLocale,
};
