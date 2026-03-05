// src/lib/portfolio-data.ts

export type ImpactScore = 'High' | 'Medium' | 'Low';
export type Status = 'Active' | 'Planned' | 'Identified';

export interface PortfolioCompany {
  id: string;
  name: string;
  industry: string;
  aiOpportunity: string;
  impactScore: ImpactScore;
  implementationStatus: Status;
  quickWin: string;
  logoColor?: string;
  path: string;
  fileName: string;
}

export const portfolioData: PortfolioCompany[] = [
  {
    id: 'azurity',
    name: 'Azurity Pharmaceuticals',
    industry: 'Pharma Services',
    aiOpportunity: 'O2E Platform (Market Intelligence)',
    impactScore: 'High',
    implementationStatus: 'Active',
    quickWin: 'Product Gap Analysis Automation',
    logoColor: 'text-blue-600',
    path: '/portfolio/azurity',
    fileName: 'Azurity_Pharmaceuticals_AI_Transformation.md'
  },
  {
    id: 'clinical-ink',
    name: 'Clinical Ink',
    industry: 'Clinical Tech',
    aiOpportunity: 'Data Capture Automation',
    impactScore: 'High',
    implementationStatus: 'Planned',
    quickWin: 'Predictive Analytics for Patient Dropout',
    logoColor: 'text-purple-600',
    path: '/portfolio/clinical-ink',
    fileName: 'Clinical_Ink_AI_Transformation.md'
  },
  {
    id: 'bend',
    name: 'Bend Bioscience',
    industry: 'CDMO',
    aiOpportunity: 'Formulation Optimization',
    impactScore: 'Medium',
    implementationStatus: 'Identified',
    quickWin: 'Process parameter tuning',
    logoColor: 'text-indigo-600',
    path: '/portfolio/bend',
    fileName: 'Bend_Bioscience_AI_Transformation.md'
  },
  {
    id: 'applied-stemcell',
    name: 'Applied StemCell',
    industry: 'Gene Editing',
    aiOpportunity: 'Research Acceleration',
    impactScore: 'High',
    implementationStatus: 'Identified',
    quickWin: 'CRISPR Target Prediction',
    logoColor: 'text-red-500',
    path: '/portfolio/applied-stemcell',
    fileName: 'Applied_StemCell_AI_Transformation.md'
  },
  {
    id: 'autocruitment',
    name: 'AutoCruitment',
    industry: 'Patient Recruitment',
    aiOpportunity: 'Targeting Optimization',
    impactScore: 'High',
    implementationStatus: 'Identified',
    quickWin: 'Conversion Prediction Models',
    logoColor: 'text-orange-500',
    path: '/portfolio/autocruitment',
    fileName: 'AutoCruitment_AI_Transformation.md'
  },
  {
    id: 'informed-dna',
    name: 'InformedDNA',
    industry: 'Genetic Testing',
    aiOpportunity: 'Utilization Analytics',
    impactScore: 'Medium',
    implementationStatus: 'Identified',
    quickWin: 'Counseling Note Automation',
    logoColor: 'text-cyan-600',
    path: '/portfolio/informed-dna',
    fileName: 'InformedDNA_AI_Transformation.md'
  },
  {
    id: 'lexitas',
    name: 'Lexitas',
    industry: 'Ophthalmology CRO',
    aiOpportunity: 'Site Selection',
    impactScore: 'Medium',
    implementationStatus: 'Identified',
    quickWin: 'Enrollment Prediction',
    logoColor: 'text-blue-500',
    path: '/portfolio/lexitas',
    fileName: 'Lexitas_AI_Transformation.md'
  },
  {
    id: 'univo',
    name: 'Univo IRB',
    industry: 'IRB Services',
    aiOpportunity: 'Compliance Monitoring',
    impactScore: 'Low',
    implementationStatus: 'Identified',
    quickWin: 'Review Process Automation',
    logoColor: 'text-slate-600',
    path: '/portfolio/univo',
    fileName: 'Univo_IRB_AI_Transformation.md'
  },
  {
    id: 'vector',
    name: 'Vector Clinical Trials',
    industry: 'Trial Sites',
    aiOpportunity: 'Site Performance',
    impactScore: 'Medium',
    implementationStatus: 'Identified',
    quickWin: 'Recruitment Funnel Optimization',
    logoColor: 'text-emerald-600',
    path: '/portfolio/vector',
    fileName: 'Vector_Clinical_Trials_AI_Transformation.md'
  }
];
