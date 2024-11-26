import { LocaleMap } from '@/locale/text.map';
import { AllowedLocale } from '@/types/enums/allowed-locale.enum';
import serverContext from 'server-only-context';

const [getServerLocale, setServerLocale] = serverContext(AllowedLocale.en);

export function useServerTranslation() {
  return LocaleMap[getServerLocale()];
}

export { getServerLocale, setServerLocale };
