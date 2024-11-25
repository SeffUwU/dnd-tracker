import { ICampaign, IUser } from '@/entities';
import { WithoutGenerated } from '@/types/utils/utils.types';

export const campaignFixture: (firstUser: IUser, secondUser: IUser) => WithoutGenerated<ICampaign>[] = (
  first,
  second,
) => [
  {
    creatorId: first.id,
    description: 'My first campaign',
    name: 'Glass World',
  },

  {
    creatorId: second.id,
    description: 'My first campaign',
    name: 'Holy Moly',
  },
  {
    creatorId: first.id,
    description: 'My second ever campaign!',
    name: 'Ponyville Story',
  },
  {
    creatorId: first.id,
    description: 'Third campaign',
    name: 'Mind Corp',
  },
];
