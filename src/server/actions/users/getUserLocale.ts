'use server';

import { protect } from '@/helpers/auth/protect.action';
import { ServerActionResponse } from '@/helpers/responses/base.response';
import { HttpStatusCode } from '@/helpers/responses/response.status';
import { LocaleMap } from '@/locale/text.map';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';

export const getUserLocale = protect(async (user) =>
  ServerActionResponse(HttpStatusCode.Ok, {
    userLocale: user.uiLocale ?? user.locale ?? AllowedLocale.en,
    translation: LocaleMap[user.uiLocale ?? user.locale ?? AllowedLocale.en],
  }),
);
