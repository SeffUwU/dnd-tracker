'use server';

import { protect } from '@/helpers/auth/protect.action';
import { ServerActionResponse } from '@/helpers/responses/base.response';
import { HttpStatusCode } from '@/helpers/responses/response.status';
import { EnglishLocale } from '@/locale/text/en';
import { RussianLocale } from '@/locale/text/ru';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';

const localeMap: Record<AllowedLocale, typeof EnglishLocale> = {
  en: EnglishLocale,
  ru: RussianLocale,
};

export const getUserLocale = protect(async (user) => {
  return ServerActionResponse(HttpStatusCode.Ok, {
    userLocale: user.locale ?? AllowedLocale.en,
    translation: localeMap[user.locale ?? AllowedLocale.en],
  });
});
