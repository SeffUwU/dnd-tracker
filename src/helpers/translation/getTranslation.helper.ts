"use client";
import useLocalStorageState from "use-local-storage-state";

import { RussianLocale } from "@/locale/messages/ru";
import { AllowedLocale } from "@/locale/error.messages";
import { EnglishLocale } from "@/locale/messages/en";

// TODO: probably a better way than this.. for now we'll use dis
export function getTranslation() {
  const [currentLocale] = useLocalStorageState("_ui.locale", {
    defaultValue: AllowedLocale.en,
    storageSync: true,
  });

  return currentLocale === AllowedLocale.en ? EnglishLocale : RussianLocale;
}
