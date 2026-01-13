// components/ConsultantCardGrid.tsx
import React from 'react';
import ConsultantCard from './ConsultantCard';



interface Consultant {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  hourlyRate: number;
  rating: number;
  avatar: string;
}

interface ConsultantCardGridProps {
  consultants: Consultant[];
}

const ConsultantCardGrid: React.FC<ConsultantCardGridProps> = ({ consultants }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {consultants.map((consultant) => (
        <ConsultantCard key={consultant.id} consultant={consultant} />
      ))}
    </div>
  );
};

export default ConsultantCardGrid;