import type { Nullable } from '@/types/utils/utils.types';

interface HeaderInfoProps {
  title?: Nullable<string>;
  description?: Nullable<string>;
}

export function HeaderInfo({ title, description }: HeaderInfoProps) {
  return (
    <div className="max-w-2xl p-2">
      <h3 className="pb-0">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
