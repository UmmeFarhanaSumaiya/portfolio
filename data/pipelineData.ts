import { IconType } from 'react-icons'
import {
  FiDatabase,
  FiAward,
  FiSettings,
  FiCode,
  FiBarChart2,
  FiMail,
} from 'react-icons/fi'

export interface PipelineNode {
  id: string
  label: string
  subtitle: string
  icon: IconType
  description: string
  details: string
  color: string
  sectionId: string
}

export const pipelineNodes: PipelineNode[] = [
  {
    id: 'source',
    label: 'Raw Data',
    subtitle: 'Source',
    icon: FiDatabase,
    description: 'Umme Farhana Sumaiya',
    details: 'ICT Engineer | Backend Developer',
    color: '#6C63FF',
    sectionId: 'about',
  },
  {
    id: 'education',
    label: 'Education',
    subtitle: 'ETL',
    icon: FiAward,  // Changed from FiGraduationCap
    description: 'BUP | CGPA 3.36',
    details: 'Thesis: CNN + ViT',
    color: '#00D4FF',
    sectionId: 'education',
  },
  {
    id: 'experience',
    label: 'Experience',
    subtitle: 'Transform',
    icon: FiSettings,
    description: 'BrainStation 23',
    details: '20,000+ rows processed',
    color: '#FFB800',
    sectionId: 'experience',
  },
  {
    id: 'skills',
    label: 'Skills',
    subtitle: 'Feature Engineering',
    icon: FiCode,
    description: '15+ Technologies',
    details: 'Python, FastAPI, PostgreSQL',
    color: '#00E676',
    sectionId: 'skills',
  },
  {
    id: 'projects',
    label: 'Projects',
    subtitle: 'Model Output',
    icon: FiBarChart2,
    description: '8+ Completed',
    details: 'AI, Web, Mobile, Desktop',
    color: '#FF6584',
    sectionId: 'projects',
  },
  {
    id: 'contact',
    label: 'Contact',
    subtitle: 'Data Sink',
    icon: FiMail,
    description: 'Get in Touch',
    details: 'farhana23sumaiya@gmail.com',
    color: '#FF6B6B',
    sectionId: 'contact',
  },
]