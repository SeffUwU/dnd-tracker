import { ErrorComponent } from '@/components/errors/ErrorComponent';
import { HeaderInfo } from '@/components/layout/HeaderInfo';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { TooltipMessage } from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import { getCampaigns } from '@/server/actions/campaigns/getCampaigns';
import { getUserLocale } from '@/server/actions/users/getUserLocale';
import { Ellipsis, Plus, Users2 } from 'lucide-react';
import Link from 'next/link';

export default async function Home() {
  const [campaigns, serverLocale] = await Promise.all([getCampaigns(), getUserLocale()]);

  if (campaigns.is_error || serverLocale.is_error) {
    return <ErrorComponent />;
  }

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-between">
        <HeaderInfo
          title={serverLocale.value.translation.sidebar.campaigns}
          description={serverLocale.value.translation.headers.campaigns}
        />
        <div className="flex flex-col justify-end mb-2">
          <div className="flex flex-row gap-2">
            <Button>
              Create
              <Plus />
            </Button>

            <Button>
              Invite
              <Users2 />
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-32 max-w-72">Name</TableHead>
              <TableHead className="max-w-3xl hidden md:table-cell">Description</TableHead>
              <TableHead className="w-6 hidden md:table-cell">Players</TableHead>
              <TableHead className="w-52">Creator</TableHead>
              <TableHead className="w-14">Action</TableHead>
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
                <TableCell>
                  <TooltipMessage
                    message={
                      campaign.madeByYou
                        ? serverLocale.value.translation.tooltips.campaigns.madeByYou
                        : serverLocale.value.translation.tooltips.campaigns.campaignGM
                    }
                  >
                    <Link
                      href={`/users/${campaign.user.id}`}
                      className={cn(
                        'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
                        {
                          'bg-green-200': campaign.madeByYou,
                        },
                      )}
                    >
                      {campaign.user.name}
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
