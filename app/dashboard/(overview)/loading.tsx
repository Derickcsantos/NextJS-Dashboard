export const dynamic = 'force-dynamic';
export const revalidate = 0;

import DashboardSkeleton from '@/app/ui/skeletons'

export default function Loading() {
  return <DashboardSkeleton />;
}