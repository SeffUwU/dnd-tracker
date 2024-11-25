'use client';
import useLocalStorageState from 'use-local-storage-state';

import { RussianLocale } from '@/locale/text/ru';
import { EnglishLocale } from '@/locale/text/en';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';

// TODO: probably a better way than this.. for now we'll use dis
export function getTranslation() {
  const [currentLocale] = useLocalStorageState('_ui.locale', {
    defaultValue: AllowedLocale.en,
    storageSync: true,
  });

  return currentLocale === AllowedLocale.en ? EnglishLocale : RussianLocale;
}
