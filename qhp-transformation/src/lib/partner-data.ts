// src/lib/partner-data.ts

export type RelationshipStatus = 'Strong' | 'Warm' | 'Cold';

export interface PartnerProfile {
  id: string;
  name: string;
  role: string;
  status: RelationshipStatus;
  keyAngle: string;
  focusArea: string;
  imageColor: string;
  fileName: string;
  image?: string;
}

export const partnerData: PartnerProfile[] = [
  {
    id: 'vern-davenport',
    name: 'Vern Davenport',
    role: 'Partner',
    status: 'Warm',
    keyAngle: 'Transformation Credibility',
    focusArea: 'Operational Transformation',
    imageColor: 'bg-yellow-500',
    fileName: 'Vern_Davenport.md',
    image: '/partners/Vern_Davenport.jpg'
  },
  {
    id: 'michael-sorensen',
    name: 'Michael Sorensen',
    role: 'Partner',
    status: 'Strong',
    keyAngle: 'Champion & Intel',
    focusArea: 'Deal Execution & Strategy',
    imageColor: 'bg-green-500',
    fileName: 'Michael_Sorensen.md',
    image: '/partners/Michael_Sorensen.jpg'
  },
  {
    id: 'matt-jenkins',
    name: 'Matt Jenkins',
    role: 'Partner',
    status: 'Cold',
    keyAngle: 'Founder-to-Founder Bond',
    focusArea: 'Clinical Trials Tech',
    imageColor: 'bg-red-500',
    fileName: 'Matt_Jenkins.md',
    image: '/partners/Matt_Jenkins.jpg'
  },
  {
    id: 'jeff-edwards',
    name: 'Jeff Edwards',
    role: 'Partner',
    status: 'Cold',
    keyAngle: 'Analytical Rigor',
    focusArea: 'Fund Management & Finance',
    imageColor: 'bg-blue-500',
    fileName: 'Jeff_Edwards.md',
    image: '/partners/Jeff_Edwards.jpg'
  },
  {
    id: 'ashton-poole',
    name: 'Ashton Poole',
    role: 'Partner',
    status: 'Cold',
    keyAngle: 'Board-Level Polish',
    focusArea: 'Legal & Governance',
    imageColor: 'bg-indigo-500',
    fileName: 'Ashton_Poole.md',
    image: '/partners/Ashton_Poole.jpg'
  }
];
