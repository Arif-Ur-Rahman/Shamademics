// components/ConsultantCard.tsx
import React from 'react';
import { Star, MapPin, Globe, Clock, Award } from 'lucide-react';
import { Consultant } from '@/lib/types/consultant';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/Button';

interface ConsultantCardProps {
  consultant: Consultant;
}

const availabilityConfig = {
  available: { variant: 'success' as const, label: 'Available' },
  limited: { variant: 'warning' as const, label: 'Limited' },
  busy: { variant: 'error' as const, label: 'Busy' },
};

const ConsultantCard: React.FC<ConsultantCardProps> = ({ consultant }) => {
  const avail = consultant.availability
    ? availabilityConfig[consultant.availability]
    : null;

  return (
    <Card className="group flex flex-col hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
      <CardContent className="p-6 flex-1">
        {/* Header */}
        <div className="flex items-start gap-4">
          {/* Avatar */}
          <div className="relative flex-shrink-0">
            <div className="w-16 h-16 rounded-xl bg-accent/10 border border-border flex items-center justify-center">
              <span className="text-2xl font-bold text-accent">
                {consultant.name.charAt(0)}
              </span>
            </div>
            {avail && (
              <Badge
                variant={avail.variant}
                className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[10px] px-1.5 py-0.5 whitespace-nowrap"
              >
                {avail.label}
              </Badge>
            )}
          </div>

          {/* Info */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-foreground truncate">{consultant.name}</h3>
            <p className="text-sm text-muted-foreground truncate">{consultant.title}</p>

            {consultant.university && (
              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                <Award className="w-3 h-3 flex-shrink-0" />
                <span className="truncate">{consultant.university}</span>
              </div>
            )}

            {consultant.country && (
              <div className="flex items-center gap-1 mt-0.5 text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                <span>{consultant.country}</span>
              </div>
            )}

            {/* Rating */}
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(consultant.rating)
                        ? 'text-warning fill-warning'
                        : 'text-border fill-border'
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm font-semibold text-foreground">
                {consultant.rating.toFixed(1)}
              </span>
              {consultant.reviewCount && (
                <span className="text-xs text-muted-foreground">
                  ({consultant.reviewCount})
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Bio */}
        {consultant.bio && (
          <p className="mt-4 text-sm text-muted-foreground line-clamp-2 leading-relaxed">
            {consultant.bio}
          </p>
        )}

        {/* Expertise */}
        <div className="mt-4">
          <div className="flex items-center gap-1.5 mb-2.5">
            <Globe className="w-3.5 h-3.5 text-accent" />
            <span className="text-xs font-semibold text-foreground uppercase tracking-wide">
              Expertise
            </span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {consultant.expertise.slice(0, 4).map((skill, i) => (
              <Badge key={i} variant="accent">
                {skill}
              </Badge>
            ))}
            {consultant.expertise.length > 4 && (
              <Badge variant="secondary">+{consultant.expertise.length - 4}</Badge>
            )}
          </div>
        </div>

        {/* Languages */}
        {consultant.languages && consultant.languages.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {consultant.languages.map((lang, i) => (
              <Badge key={i} variant="outline">
                {lang}
              </Badge>
            ))}
          </div>
        )}

        {/* Experience */}
        {consultant.yearsOfExperience && (
          <div className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground">
            <Clock className="w-3.5 h-3.5" />
            <span>{consultant.yearsOfExperience}+ years experience</span>
          </div>
        )}
      </CardContent>

      {/* Footer */}
      <CardFooter className="px-6 py-4 border-t border-border justify-between">
        <div>
          <span className="text-2xl font-bold text-foreground">${consultant.hourlyRate}</span>
          <span className="text-sm text-muted-foreground">/hr</span>
          <p className="text-xs text-muted-foreground mt-0.5">Flexible booking</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Profile
          </Button>
          <Button variant="default" size="sm">
            Book Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ConsultantCard;
