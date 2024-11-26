import { useServerTranslation } from '@/components/contexts/global.server.context';
import { ErrorComponent } from '@/components/errors/ErrorComponent';
import { HeaderInfo } from '@/components/layout/HeaderInfo';
import { Button } from '@/components/ui/button';
import { getCampaign } from '@/server/actions/campaigns/getCampaign';
import Link from 'next/link';

export default async function CampaignPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const campaign = await getCampaign(id);
  const t = useServerTranslation();

  if (campaign.is_error) {
    return <ErrorComponent description={campaign.code} />;
  }

  const c = campaign.value;

  return (
    <div>
      <div className="bg-slate-200 dark:bg-slate-800 dark:border-l-2 dark:border-l-slate-900 w-full flex flex-row gap-4">
        <HeaderInfo title={c.name} description={c.description} />
        <div className="pt-3">
          {t.general.creator}: {c.user.name}
        </div>
      </div>
      <div className="content-padding">
        <h3>Users (WIP)</h3>
        <div className="flex flex-col gap-4 items-start">
          {c.usersToCampaigns.map(({ user, joinedAt }) => (
            <Button key={user.id} asChild variant={'link'}>
              <Link href={`/users/${user.id}`}>
                {user.name} --- {t.general.joinedAt}: {joinedAt?.toISOString()}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
