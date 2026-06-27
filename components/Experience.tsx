'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

const experiences = [
  {
    title: 'Intern (2-month Industrial Attachment)',
    company: 'Brainstation23 PLC',
    location: 'Dhaka, Bangladesh',
    period: 'May 2026 - Present',
    achievements: [
      'Built end-to-end data ingestion pipeline for Real-time AI-Powered Traffic & Accident Prediction System across 50+ Dhaka road segments',
      'Designed Celery Beat scheduler polling Google Maps Distance Matrix API every 10 minutes, storing time-series data in PostgreSQL + PostGIS',
      'Engineered Dhaka-specific features - hartal days, Ramadan patterns, Friday prayer hours, and real-time rain intensity from OpenWeatherMap API',
      'Processed Dhaka\'s full road network via OSMnx, enriching segments with road width and waterlogging classification',
      'Built automated gap detection and linear interpolation pipeline, delivering 20,000+ rows of clean training data',
      'Built ML pipeline for Smartest Tech Deals: Clustered 100+ raw search queries using DBSCAN + TF-IDF with automatic eps tuning',
      'Built hourly spike detection using Isolation Forest with percentage-change fallback',
      'Developing Next.js admin dashboard with Recharts visualization and protected routes'
    ],
    tech: ['Python', 'Celery', 'Redis', 'PostgreSQL', 'PostGIS', 'OSMnx', 'SQLAlchemy', 'Docker', 'scikit-learn', 'pandas', 'Next.js', 'TypeScript'],
  },
  {
    title: 'Undergraduate Thesis Researcher',
    company: 'Bangladesh University of Professionals',
    location: 'Dhaka, Bangladesh',
    period: 'Jul 2025 - Present',
    achievements: [
      'Conducting research on detecting heart arrhythmia using deep learning models',
      'Implementing and comparing CNN and Vision Transformer (ViT) architectures for medical signal classification',
      'Performing data preprocessing, feature extraction, and model evaluation to improve classification accuracy',
      'Collaborating with academic supervisors to refine research methodology'
    ],
    tech: ['CNN', 'Vision Transformer', 'Deep Learning', 'Python'],
  },
  {
    title: 'Chairperson',
    company: 'IEEE Computer Society BUP Student Branch Chapter',
    location: 'Dhaka, Bangladesh',
    period: 'Oct 2025 - Present',
    achievements: [
      'Lead organizational activities and coordinate technical events, workshops, and seminars',
      'Organized IEEE BranchFest 2025 including two specific segments',
      'Organized a day-long Workshop on Web and Git basics'
    ],
    tech: ['Leadership', 'Event Management', 'Community Building'],
  },
  {
    title: 'Management Trainee',
    company: 'YSSE - Content Writing Department',
    location: 'Dhaka, Bangladesh',
    period: 'Aug 2025 - Dec 2025',
    achievements: [
      'Guided interns in content writing, structuring articles, and improving writing skills',
      'Reviewed and provided feedback on blog articles written by four interns',
      'Published blog posts on YSSE Blog Facebook page and managed posting activities',
      'Recognized as Management Trainee of the Month (November 2025)',
      'Achieved Gold certification'
    ],
    tech: ['Content Writing', 'Mentoring', 'Leadership'],
  },
]

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Experience</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Building real-world systems and leading technical communities
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/20" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 ${
                index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
              }`}
            >
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark transform -translate-x-1/2 mt-1" />

              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:ml-auto'}`}>
                <div className="glass-card p-6 hover-glow">
                  <div className="flex items-center gap-2 text-primary text-sm mb-2">
                    <FiBriefcase />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mt-2">
                    <span className="flex items-center gap-1">
                      <FiCalendar className="text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <FiMapPin className="text-primary" />
                      {exp.location}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2 text-gray-300 text-sm">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}