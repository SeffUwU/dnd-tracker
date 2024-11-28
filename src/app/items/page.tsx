import { useServerTranslation } from '@/components/contexts/global.server.context';

export default async function ItemsPage() {
  const t = await useServerTranslation();

  return <div>Items Page {t.capitalizedWords.name}</div>;
}
