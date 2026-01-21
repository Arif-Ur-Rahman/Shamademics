// lib/data/consultants.ts

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

export const sampleConsultants: Consultant[] = [
  {
    id: '1',
    name: 'Dr. Sarah Chen',
    title: 'Professor of Computer Science',
    expertise: ['Machine Learning', 'AI Research', 'Data Science', 'Deep Learning'],
    hourlyRate: 150,
    rating: 4.8,
    avatar: '/avatars/sarah.jpg',
    bio: 'Expert in AI and Machine Learning with 15+ years of research experience at MIT and Stanford.',
    university: 'Stanford University',
    department: 'Computer Science',
    country: 'United States',
    languages: ['English', 'Mandarin'],
    availability: 'available',
    yearsOfExperience: 15,
    reviewCount: 42,
  },
  {
    id: '2',
    name: 'Prof. James Wilson',
    title: 'Physics Department Head',
    expertise: ['Quantum Physics', 'Research Methodology', 'Academic Writing', 'Quantum Computing'],
    hourlyRate: 120,
    rating: 4.9,
    avatar: '/avatars/james.jpg',
    bio: 'Quantum physics researcher with expertise in quantum computing and condensed matter physics.',
    university: 'Cambridge University',
    department: 'Physics',
    country: 'United Kingdom',
    languages: ['English', 'French'],
    availability: 'available',
    yearsOfExperience: 20,
    reviewCount: 38,
  },
  {
    id: '3',
    name: 'Dr. Maria Garcia',
    title: 'Biology Research Director',
    expertise: ['Molecular Biology', 'Lab Techniques', 'Grant Writing', 'Genetic Engineering'],
    hourlyRate: 135,
    rating: 4.7,
    avatar: '/avatars/maria.jpg',
    bio: 'Molecular biology expert specializing in genetic research and biotechnology.',
    university: 'ETH Zurich',
    department: 'Biology',
    country: 'Switzerland',
    languages: ['English', 'Spanish', 'German'],
    availability: 'limited',
    yearsOfExperience: 12,
    reviewCount: 29,
  },
  {
    id: '4',
    name: 'Dr. Kenji Tanaka',
    title: 'Engineering Professor',
    expertise: ['Robotics', 'Automation', 'CAD Design', 'Research Proposals'],
    hourlyRate: 140,
    rating: 4.6,
    avatar: '/avatars/kenji.jpg',
    bio: 'Renowned mechanical engineering professor specializing in robotics and automation.',
    university: 'University of Tokyo',
    department: 'Mechanical Engineering',
    country: 'Japan',
    languages: ['Japanese', 'English'],
    availability: 'available',
    yearsOfExperience: 18,
    reviewCount: 31,
  },
  {
    id: '5',
    name: 'Dr. Amina Hassan',
    title: 'Economics Professor',
    expertise: ['Economic Research', 'Statistical Analysis', 'Policy Writing', 'Development Economics'],
    hourlyRate: 125,
    rating: 4.8,
    avatar: '/avatars/amina.jpg',
    bio: 'Development economics expert with focus on emerging markets. Consultant for World Bank and IMF.',
    university: 'LSE (London School of Economics)',
    department: 'Economics',
    country: 'United Kingdom',
    languages: ['English', 'Arabic', 'French'],
    availability: 'available',
    yearsOfExperience: 14,
    reviewCount: 27,
  },
  {
    id: '6',
    name: 'Prof. Robert Kim',
    title: 'Mathematics Department Chair',
    expertise: ['Applied Mathematics', 'Statistics', 'Numerical Analysis', 'Theoretical Math'],
    hourlyRate: 130,
    rating: 4.5,
    avatar: '/avatars/robert.jpg',
    bio: 'Award-winning mathematician specializing in applied mathematics and statistical modeling.',
    university: 'Harvard University',
    department: 'Mathematics',
    country: 'United States',
    languages: ['English', 'Korean'],
    availability: 'available',
    yearsOfExperience: 22,
    reviewCount: 35,
  },
];

// Helper functions
export const getFeaturedConsultants = (count: number = 3): Consultant[] => {
  return sampleConsultants.slice(0, count);
};

export const getConsultantById = (id: string): Consultant | undefined => {
  return sampleConsultants.find(consultant => consultant.id === id);
};

export const getConsultantsByExpertise = (expertise: string): Consultant[] => {
  return sampleConsultants.filter(consultant =>
    consultant.expertise.some(exp => 
      exp.toLowerCase().includes(expertise.toLowerCase())
    )
  );
};

export const getAllConsultants = (): Consultant[] => {
  return sampleConsultants;
};

export const getConsultantsByCountry = (country: string): Consultant[] => {
  return sampleConsultants.filter(consultant =>
    consultant.country?.toLowerCase() === country.toLowerCase()
  );
};