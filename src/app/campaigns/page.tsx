import { ErrorComponent } from "@/components/errors/ErrorComponent";
import { HeaderInfo } from "@/components/layout/HeaderInfo";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getCampaigns } from "@/server/actions/campaigns/getCampaigns";
import { Ellipsis, Plus, Users2 } from "lucide-react";
import Link from "next/link";

export default async function Home() {
  const campaigns = await getCampaigns();

  if (campaigns.is_error) {
    return <ErrorComponent description={campaigns.message} />;
  }

  return (
    <div>
      <div className="flex flex-row flex-wrap justify-between">
        <HeaderInfo />
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
              <TableHead className="max-w-72">Name</TableHead>
              <TableHead className="">Description</TableHead>
              <TableHead className="w-24">Creator</TableHead>
              <TableHead className="w-14">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {campaigns.value.map((campaign) => (
              <TableRow key={campaign.id}>
                <TableCell className="font-medium max-w-72">
                  <Link
                    href={`/campaigns/${campaign.id}`}
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold text-ellipsis"
                  >
                    {campaign.name}
                  </Link>
                </TableCell>
                <TableCell>
                  <p className="text-ellipsis line-clamp-1 max-w-7xl">
                    {`${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}${campaign.description}`}
                  </p>
                </TableCell>
                <TableCell>
                  <Link
                    href={`/users/${campaign.user.id}`}
                    className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold"
                  >
                    {campaign.user.name}
                  </Link>
                </TableCell>
                <TableCell className="text-right">
                  <Button>
                    <Ellipsis />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          {/* <TableFooter>
            <TableRow>
              <TableCell colSpan={3}>Total</TableCell>
              <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
          </TableFooter> */}
        </Table>
      </div>
    </div>
  );
}
