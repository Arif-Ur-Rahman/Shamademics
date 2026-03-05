// components/ConsultantCardSkeleton.tsx
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';

const ConsultantCardSkeleton: React.FC = () => {
  return (
    <Card className="animate-pulse">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-muted rounded-xl flex-shrink-0" />
          <div className="flex-1 space-y-2.5">
            <div className="h-4 bg-muted rounded w-3/4" />
            <div className="h-3 bg-muted rounded w-1/2" />
            <div className="h-3 bg-muted rounded w-2/5" />
            <div className="flex gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-3.5 h-3.5 bg-muted rounded-full" />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <div className="h-3 bg-muted rounded" />
          <div className="h-3 bg-muted rounded w-5/6" />
        </div>

        <div className="mt-4">
          <div className="h-3 bg-muted rounded w-1/4 mb-2.5" />
          <div className="flex gap-1.5 flex-wrap">
            <div className="h-5 bg-muted rounded-md w-20" />
            <div className="h-5 bg-muted rounded-md w-24" />
            <div className="h-5 bg-muted rounded-md w-16" />
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-6 py-4 border-t border-border justify-between">
        <div className="h-7 bg-muted rounded w-20" />
        <div className="flex gap-2">
          <div className="h-8 bg-muted rounded-lg w-20" />
          <div className="h-8 bg-muted rounded-lg w-24" />
        </div>
      </CardFooter>
    </Card>
  );
};

export default ConsultantCardSkeleton;
