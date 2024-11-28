'use server';

import { users } from '@/entities';
import { protect } from '@/helpers/auth/protect.action';
import { db } from '@/server/database';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import { eq } from 'drizzle-orm';

export const updateUiLanguage = protect(async (user, lang: AllowedLocale) => {
  await db.update(users).set({ uiLocale: lang }).where(eq(users.id, user.id)).execute();

  return true;
});
