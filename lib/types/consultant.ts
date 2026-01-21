// lib/types/consultant.ts
export interface Consultant {
  id: string;
  name: string;
  title: string;
  expertise: string[];
  hourlyRate: number;
  rating: number;
  avatar: string;
  bio?: string;
  university?: string;
  department?: string;
  country?: string;
  languages?: string[];
  availability?: 'available' | 'limited' | 'busy';
  yearsOfExperience?: number;
  reviewCount?: number;
}