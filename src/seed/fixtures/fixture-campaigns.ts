import { ICampaign, IUser } from '@/entities';
import { WithoutGenerated } from '@/types/utils/utils.types';
import { createId } from '@paralleldrive/cuid2';

export const campaignFixture: (firstUser: IUser, secondUser: IUser) => WithoutGenerated<ICampaign>[] = (
  first,
  second,
) => [
  {
    creatorId: first.id,
    description: 'My first campaign',
    name: 'Glass World',
    inviteCode: createId(),
  },

  {
    creatorId: second.id,
    description: 'My first campaign',
    name: 'Holy Moly',
    inviteCode: createId(),
  },
  {
    creatorId: first.id,
    description: 'My second ever campaign!',
    name: 'Ponyville Story',
    inviteCode: createId(),
  },
  {
    creatorId: first.id,
    description: 'Third campaign',
    name: 'Mind Corp',
    inviteCode: createId(),
  },
];
