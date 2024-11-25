interface HeaderInfoProps {
  title: string;
  description: string;
}

export function HeaderInfo({ title, description }: HeaderInfoProps) {
  return (
    <div className="max-w-2xl p-2">
      <h3 className="pb-0">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
