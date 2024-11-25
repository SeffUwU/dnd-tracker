import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import { EnglishErrorMessages } from './errors/en';
import { RussianErrorMessages } from './errors/ru';
import { ErrorCode } from '@/types/enums/error-code.enum';

export const ErrorCodeMessage: Record<AllowedLocale, Record<ErrorCode, string>> = {
  en: EnglishErrorMessages,
  ru: RussianErrorMessages,
};
