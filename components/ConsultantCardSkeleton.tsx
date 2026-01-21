// components/ConsultantCardSkeleton.tsx
import React from 'react';

const ConsultantCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 animate-pulse">
      <div className="flex items-start space-x-4">
        <div className="w-20 h-20 bg-gray-200 rounded-full"></div>
        <div className="flex-1 space-y-3">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>
      </div>
      
      <div className="mt-6 space-y-4">
        <div className="h-4 bg-gray-200 rounded"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
      </div>
      
      <div className="mt-6">
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-3"></div>
        <div className="flex gap-2">
          <div className="h-8 bg-gray-200 rounded-lg w-20"></div>
          <div className="h-8 bg-gray-200 rounded-lg w-24"></div>
          <div className="h-8 bg-gray-200 rounded-lg w-16"></div>
        </div>
      </div>
      
      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
        <div className="h-8 bg-gray-200 rounded w-24"></div>
        <div className="h-10 bg-gray-200 rounded-lg w-28"></div>
      </div>
    </div>
  );
};

export default ConsultantCardSkeleton;