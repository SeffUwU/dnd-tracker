'use server';

import { users } from '@/entities';
import { protect } from '@/helpers/auth/protect.action';
import { getPathname } from '@/helpers/request/getPathname';
import { db } from '@/server/database';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

export const updateUiLanguage = protect(async (user, lang: AllowedLocale) => {
  const pathname = await getPathname();

  await db.update(users).set({ uiLocale: lang }).where(eq(users.id, user.id)).execute();

  redirect(pathname ?? '/');
});
