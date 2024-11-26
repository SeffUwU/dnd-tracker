import { LoadingSpinner } from '@/components/ui/loader';

export default function Loading() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <LoadingSpinner />
    </div>
  );
}
