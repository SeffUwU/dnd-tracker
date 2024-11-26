'use client';

import React from 'react';
import { GlobalContextProvider } from './global.client.context';
import type { EnglishLocale } from '@/locale/text/en';
import { TokenPayload } from '@/types/jwt/token.payload.type';

export function WrapWithContexts({
  children,
  locale,
  user,
}: React.PropsWithChildren & { locale: typeof EnglishLocale; user?: TokenPayload }) {
  return (
    <GlobalContextProvider locale={locale} user={user}>
      {children}
    </GlobalContextProvider>
  );
}
