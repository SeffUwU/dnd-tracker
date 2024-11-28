import { EnglishLocale } from '@/locale/text/en';
import { getUserLocale } from '@/server/actions/users/getUserLocale';

export async function useServerTranslation() {
  const response = await getUserLocale();

  if (response.is_error) {
    return EnglishLocale;
  }

  return response.value.translation;
}
