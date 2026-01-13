// components/ConsultantCard.tsx
import React from 'react';
import { Star } from 'lucide-react'; // You'll need to install lucide-react: npm install lucide-react

interface Consultant {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  hourlyRate: number;
  rating: number;
  avatar: string;
}

interface ConsultantCardProps {
  consultant: Consultant;
}

const ConsultantCard: React.FC<ConsultantCardProps> = ({ consultant }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex items-start space-x-4">
        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
          <span className="text-2xl font-semibold text-gray-600">
            {consultant.name.charAt(0)}
          </span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900">{consultant.name}</h3>
          <p className="text-gray-600 text-sm">{consultant.title}</p>
          <div className="flex items-center mt-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(consultant.rating)
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="ml-2 text-sm text-gray-600">
              {consultant.rating.toFixed(1)}
            </span>
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise:</h4>
        <div className="flex flex-wrap gap-2">
          {consultant.expertise.slice(0, 3).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
            >
              {skill}
            </span>
          ))}
          {consultant.expertise.length > 3 && (
            <span className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{consultant.expertise.length - 3} more
            </span>
          )}
        </div>
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <div>
          <span className="text-2xl font-bold text-gray-900">
            ${consultant.hourlyRate}
          </span>
          <span className="text-gray-600">/hour</span>
        </div>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Book Session
        </button>
      </div>
    </div>
  );
};

export default ConsultantCard;