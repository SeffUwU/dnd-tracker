'use client';

import { useTranslation } from '@/components/contexts/global.client.context';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { joinCampaign } from '@/server/actions/campaigns/joinCampaign';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface JoinCampaignFormProps {
  code?: string;
}
export function JoinCampaignForm({ code }: JoinCampaignFormProps) {
  const [codeText, setCodeText] = useState(code || '');
  const t = useTranslation();
  const router = useRouter();

  const joinCampaignHandler = () => {
    joinCampaign(codeText).then((response) => {
      if (response.is_error) {
        toast({
          variant: 'destructive',
          title: t.statusTitle.error,
          description: response.message,
        });
        return;
      }

      toast({
        title: t.statusTitle.success,
        description: t.statusMessage.campaignJoinedSuccessful,
      });

      router.push(`/campaigns/${response.value.campaignId}`);
    });
  };
  return (
    <div className="flex flex-row gap-2 mt-2 max-w-xl items-center">
      <label className="font-semibold " htmlFor="code">
        Code:
      </label>
      <Input id="code" onChange={(e) => setCodeText(e.target.value)} value={codeText} />
      <Button onClick={joinCampaignHandler}>Join</Button>
    </div>
  );
}
