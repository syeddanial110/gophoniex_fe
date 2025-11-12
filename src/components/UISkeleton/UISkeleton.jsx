import React from "react";
import { Skeleton } from "../ui/skeleton";

const UISkeleton = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-4 w-[80%]" />
      <Skeleton className="h-4 w-[80%]" />
    </div>
  );
};

export default UISkeleton;
