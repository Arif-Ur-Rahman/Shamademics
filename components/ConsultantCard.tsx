// components/ConsultantCard.tsx
import React from 'react';
import { Star, MapPin, Globe, Clock, Award } from 'lucide-react';
import { Consultant } from '@/lib/types/consultant'; // Import the type
import Image from 'next/image'; 

interface ConsultantCardProps {
  consultant: Consultant;
}

const ConsultantCard: React.FC<ConsultantCardProps> = ({ consultant }) => {
  const availabilityColors = {
    available: 'bg-green-100 text-green-800',
    limited: 'bg-yellow-100 text-yellow-800',
    busy: 'bg-red-100 text-red-800',
  };

  const availabilityLabels = {
    available: 'Available',
    limited: 'Limited',
    busy: 'Busy',
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100">
      {/* Header with avatar and basic info */}
      <div className="flex items-start space-x-4">
        <div className="relative">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100">
            {/* If using Next.js Image */}
            {/* <Image
              src={consultant.avatar}
              alt={consultant.name}
              width={80}
              height={80}
              className="object-cover"
            /> */}
            <div className="w-full h-full flex items-center justify-center">
              <span className="text-3xl font-bold text-blue-600">
                {consultant.name.charAt(0)}
              </span>
            </div>
          </div>
          {consultant.availability && (
            <div className={`absolute -bottom-1 -right-1 px-2 py-1 rounded-full text-xs font-medium ${availabilityColors[consultant.availability]}`}>
              {availabilityLabels[consultant.availability]}
            </div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900">{consultant.name}</h3>
          <p className="text-gray-600">{consultant.title}</p>
          
          {consultant.university && (
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <Award className="w-4 h-4 mr-1" />
              <span>{consultant.university}</span>
            </div>
          )}
          
          {consultant.country && (
            <div className="flex items-center mt-1 text-sm text-gray-500">
              <MapPin className="w-4 h-4 mr-1" />
              <span>{consultant.country}</span>
            </div>
          )}
          
          {/* Rating */}
          <div className="flex items-center mt-3">
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
            <span className="ml-2 font-semibold text-gray-900">
              {consultant.rating.toFixed(1)}
            </span>
            {consultant.reviewCount && (
              <span className="ml-1 text-gray-500">
                ({consultant.reviewCount} reviews)
              </span>
            )}
          </div>
        </div>
      </div>
      
      {/* Bio Preview */}
      {consultant.bio && (
        <div className="mt-4">
          <p className="text-gray-600 text-sm line-clamp-2">{consultant.bio}</p>
        </div>
      )}
      
      {/* Expertise */}
      <div className="mt-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
          <Globe className="w-4 h-4 mr-2" />
          Areas of Expertise
        </h4>
        <div className="flex flex-wrap gap-2">
          {consultant.expertise.slice(0, 4).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1.5 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg border border-blue-100"
            >
              {skill}
            </span>
          ))}
          {consultant.expertise.length > 4 && (
            <span className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-lg">
              +{consultant.expertise.length - 4} more
            </span>
          )}
        </div>
      </div>
      
      {/* Languages (if available) */}
      {consultant.languages && consultant.languages.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Languages:</h4>
          <div className="flex flex-wrap gap-2">
            {consultant.languages.map((language, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-50 text-gray-700 text-xs rounded-lg"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      )}
      
      {/* Experience (if available) */}
      {consultant.yearsOfExperience && (
        <div className="mt-4 flex items-center text-sm text-gray-600">
          <Clock className="w-4 h-4 mr-2" />
          <span>{consultant.yearsOfExperience}+ years experience</span>
        </div>
      )}
      
      {/* Footer with price and action */}
      <div className="mt-8 pt-6 border-t border-gray-100 flex justify-between items-center">
        <div>
          <div className="text-2xl font-bold text-gray-900">
            ${consultant.hourlyRate}
            <span className="text-gray-500 text-base font-normal">/hour</span>
          </div>
          <div className="text-xs text-gray-500 mt-1">Flexible booking options</div>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors">
            View Profile
          </button>
          <button className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-md hover:shadow-lg">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsultantCard;