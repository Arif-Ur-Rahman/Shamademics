// components/ConsultantCardGrid.tsx
import React from 'react';
import ConsultantCard from './ConsultantCard';
import ConsultantCardSkeleton from './ConsultantCardSkeleton';
import { Consultant } from '@/lib/types/consultant';
import { Button } from '@/components/ui/Button';
import { Search } from 'lucide-react';

interface ConsultantCardGridProps {
  consultants: Consultant[];
  isLoading?: boolean;
  skeletonCount?: number;
}

const ConsultantCardGrid: React.FC<ConsultantCardGridProps> = ({
  consultants,
  isLoading = false,
  skeletonCount = 6,
}) => {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: skeletonCount }).map((_, index) => (
          <ConsultantCardSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (consultants.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="mx-auto w-16 h-16 bg-muted rounded-xl flex items-center justify-center mb-4">
          <Search className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-2">No consultants found</h3>
        <p className="text-muted-foreground max-w-sm mx-auto text-sm">
          Try adjusting your search filters or browse all available consultants.
        </p>
        <Button className="mt-6" variant="outline">
          View All Consultants
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {consultants.map((consultant) => (
        <ConsultantCard key={consultant.id} consultant={consultant} />
      ))}
    </div>
  );
};

export default ConsultantCardGrid;
