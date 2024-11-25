'use server';

import { users } from '@/entities';
import { protect } from '@/helpers/auth/protect.action';
import { getPathname } from '@/helpers/request/getPathname';
import { db } from '@/server/database';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import { eq } from 'drizzle-orm';
import { redirect } from 'next/navigation';

export const updateMyLanguage = protect(async (user, lang: AllowedLocale) => {
  const pathname = await getPathname();
  await db.update(users).set({ locale: lang }).where(eq(users.id, user.id)).execute();
  console.log(lang);
  redirect(pathname ?? '/');
});
