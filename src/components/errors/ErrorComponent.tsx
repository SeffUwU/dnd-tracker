import { ErrorCode } from '@/types/enums/error-code.enum';

interface ErrorComponentProps {
  title?: string;
  description?: string;
  // TODO auto message!
  code?: ErrorCode;
}
export function ErrorComponent({
  title = 'An error occurred',
  description = 'Something went wrong',
}: ErrorComponentProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
