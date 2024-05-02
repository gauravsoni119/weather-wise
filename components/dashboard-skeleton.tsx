import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardSkeleton() {
  return (
    <>
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-64 rounded-xl" />
        <div className="space-y-2">
        </div>
      </div>
      <div className="grid grid-cols-2 gap-8">
        <Skeleton className="h-44" />
        <Skeleton className="h-44" />
        <Skeleton className="h-44" />
        <Skeleton className="h-44" />
      </div>
    </>
  );
}
