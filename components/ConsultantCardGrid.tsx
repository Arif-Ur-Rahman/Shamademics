// components/ConsultantCardGrid.tsx (with loading state)
import React from 'react';
import ConsultantCard from './ConsultantCard';
import ConsultantCardSkeleton from './ConsultantCardSkeleton';
import { Consultant } from '@/lib/types/consultant';

interface ConsultantCardGridProps {
  consultants: Consultant[];
  isLoading?: boolean;
  skeletonCount?: number;
}

const ConsultantCardGrid: React.FC<ConsultantCardGridProps> = ({ 
  consultants, 
  isLoading = false,
  skeletonCount = 6 
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
      <div className="text-center py-12">
        <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <span className="text-4xl">🔍</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No consultants found</h3>
        <p className="text-gray-500 max-w-md mx-auto">
          Try adjusting your search filters or browse all available consultants.
        </p>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          View All Consultants
        </button>
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