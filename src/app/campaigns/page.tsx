import { useServerTranslation } from '@/components/contexts/global.server.context';
import { ErrorComponent } from '@/components/errors/ErrorComponent';
import { HeaderInfo } from '@/components/layout/HeaderInfo';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TooltipMessage } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { getCampaigns } from '@/server/actions/campaigns/getCampaigns';
import { Ellipsis, GitPullRequestArrow, Plus, Users2 } from 'lucide-react';
import Link from 'next/link';

export default async function CampaignsPage() {
  const campaigns = await getCampaigns();
  const t = await useServerTranslation();

  if (campaigns.is_error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      <HeaderInfo title={t.sidebar.campaigns} description={t.headers.campaigns} />
      <div className="w-full flex flex-row flex-wrap justify-between content-padding">
        <Button variant="outline" asChild>
          <Link href="/campaigns/join">
            {t.capitalizedWords.join}
            <GitPullRequestArrow />
          </Link>
        </Button>
        <div className="flex flex-row justify-end gap-2">
          <Button>
            {t.capitalizedWords.invite}
            <Users2 />
          </Button>
          <Button>
            {t.capitalizedWords.create}
            <Plus />
          </Button>
        </div>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-32 max-w-72">{t.capitalizedWords.name}</TableHead>
              <TableHead className="max-w-3xl hidden md:table-cell">{t.capitalizedWords.description}</TableHead>
              <TableHead className="w-6 hidden md:table-cell">{t.capitalizedWords.players}</TableHead>
              <TableHead className="w-52 text-center">{t.capitalizedWords.creator}</TableHead>
              <TableHead className="w-14 text-center">{t.capitalizedWords.action}</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.value.map((campaign, idx) => (
              <TableRow key={campaign.id + idx}>
                <TableCell className="font-medium min-w-32 max-w-72">
                  <Link
                    href={`/campaigns/${campaign.id}`}
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-ellipsis"
                  >
                    {campaign.name}
                  </Link>
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  <p className="text-ellipsis line-clamp-1 max-w-2xl">{campaign.description}</p>
                </TableCell>
                <TableCell className="text-center hidden md:table-cell">{campaign.usersToCampaigns.length}</TableCell>
                <TableCell className="flex justify-center">
                  <TooltipMessage
                    message={campaign.madeByYou ? t.tooltips.campaigns.madeByYou : t.tooltips.campaigns.campaignGM}
                  >
                    <Link
                      href={`/users/${campaign.user.id}`}
                      className={cn(
                        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold ',
                        {
                          'bg-green-200 dark:bg-green-700': campaign.madeByYou,
                        },
                      )}
                    >
                      {campaign.madeByYou ? t.capitalizedWords.you : campaign.user.name}
                    </Link>
                  </TooltipMessage>
                </TableCell>
                <TableCell className="text-right">
                  <Button>
                    <Ellipsis />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
