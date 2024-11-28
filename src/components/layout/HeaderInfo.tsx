import type { Nullable } from '@/types/utils/utils.types';
import { Backpack, CircleUserRound, ClipboardList, GitPullRequestArrow, House, Users } from 'lucide-react';

const typeToIconMap = {
  users: Users,
  characters: ClipboardList,
  items: Backpack,
  profile: CircleUserRound,
  home: House,
  joinCampaign: GitPullRequestArrow,
};

interface HeaderInfoProps {
  title?: Nullable<string>;
  description?: Nullable<string>;
  type?: keyof typeof typeToIconMap;
}

export function HeaderInfo({ title, description, type }: HeaderInfoProps) {
  const Icon = type ? typeToIconMap[type] : House;

  return (
    <div className="w-full p-2 bg-slate-200 dark:bg-slate-800 dark:border-l-2 dark:border-l-slate-300 mb-2">
      <h3 className="pb-0 flex flex-row gap-2 items-center">
        <Icon />
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
}
