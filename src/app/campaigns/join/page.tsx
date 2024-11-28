import { useServerTranslation } from '@/components/contexts/global.server.context';
import { JoinCampaignForm } from '@/components/forms/campaigns/JoinForm';
import { HeaderInfo } from '@/components/layout/HeaderInfo';
import { Separator } from '@/components/ui/separator';

export default async function JoinCampaignPage({ params }: { params: Promise<{ code?: string }> }) {
  const t = await useServerTranslation();
  const { code } = await params;

  return (
    <div className=" w-full h-full">
      <HeaderInfo title={t.pageTitles.joinCampaign} description={t.headers.joinCampaign} type="joinCampaign" />
      <div className="max-w-x content-padding">
        <Separator className="mt-0" />
        <p>{t.pageSpecific.joinCampaign.message}</p>
        <p>{t.pageSpecific.joinCampaign.directions}</p>
        <Separator />
        <JoinCampaignForm code={code} />
      </div>
    </div>
  );
}
