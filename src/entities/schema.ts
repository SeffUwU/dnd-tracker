import { AllowedLocale } from "@/types/enums/allowed-locale.enum";
import { pgSchema } from "drizzle-orm/pg-core";

export const schema = pgSchema("dnd_tracker");

// Types
export const localeEnum = schema.enum("user_locale", [
  AllowedLocale.en,
  AllowedLocale.ru,
]);
