'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi'

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      title: 'Intern (2-month Industrial Attachment)',
      company: 'Brainstation23 PLC',
      location: 'Dhaka, Bangladesh',
      period: 'May 2026 - Present',
      achievements: [
        'Built end-to-end data ingestion pipeline for Real-time AI-Powered Traffic & Accident Prediction System',
        'Designed Celery Beat scheduler polling Google Maps API every 10 minutes',
        'Engineered Dhaka-specific features: hartal days, Ramadan patterns, Friday prayer hours',
        'Processed Dhaka\'s full road network via OSMnx, enriching segments with road width and waterlogging',
        'Built automated gap detection and interpolation pipeline, delivering 5,000+ rows of clean data',
        'Built ML pipeline for Smartest Tech Deals: DBSCAN + TF-IDF clustering',
        'Developing Next.js admin dashboard with Recharts and protected routes',
      ],
      tech: ['Python', 'Celery', 'Redis', 'PostgreSQL', 'PostGIS', 'OSMnx', 'Docker', 'scikit-learn', 'Next.js'],
    },
    {
      title: 'Undergraduate Thesis Researcher',
      company: 'Bangladesh University of Professionals',
      location: 'Dhaka, Bangladesh',
      period: 'Jul 2025 - Present',
      achievements: [
        'Research on detecting heart arrhythmia using deep learning models',
        'Implementing and comparing CNN and Vision Transformer architectures',
        'Performing data preprocessing, feature extraction, and model evaluation',
      ],
      tech: ['CNN', 'Vision Transformer', 'Deep Learning', 'Python'],
    },
    {
      title: 'Chairperson',
      company: 'IEEE Computer Society BUP Student Branch',
      location: 'Dhaka, Bangladesh',
      period: 'Oct 2025 - Present',
      achievements: [
        'Lead organizational activities and coordinate technical events',
        'Organized IEEE BranchFest 2025 including two segments',
        'Organized a day-long Workshop on Web and Git basics',
      ],
      tech: ['Leadership', 'Event Management', 'Community Building'],
    },
  ]

  return (
    <section id="experience" className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Experience
          </h2>
          <p className="text-[var(--text-secondary)] mt-3">Building real-world systems and leading communities</p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="glass-card p-6 hover-glow"
            >
              <div className="flex items-center gap-2 text-[var(--flow-color)] text-sm mb-2">
                <FiBriefcase />
                <span>{exp.company}</span>
              </div>
              <h3 className="text-lg font-bold text-[var(--text-primary)]">{exp.title}</h3>
              <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)] mt-2">
                <span className="flex items-center gap-1">
                  <FiCalendar className="text-[var(--flow-color)]" />
                  {exp.period}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin className="text-[var(--flow-color)]" />
                  {exp.location}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-[var(--text-secondary)]">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[var(--flow-color)] mt-1">▸</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-[var(--flow-color)]/10 text-[var(--flow-color)] border border-[var(--flow-color)]/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}