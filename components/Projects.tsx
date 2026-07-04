'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCpu, FiDatabase, FiCode } from 'react-icons/fi'

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'Brain Tumor Detection Web App',
      description: 'Detects brain tumors from MRI images using deep learning with XAI visualizations.',
      tech: ['Python', 'Deep Learning', 'XAI', 'TensorFlow'],
      icon: FiCpu,
      features: ['Image upload', 'Bounding box detection', 'XAI explanations'],
    },
    {
      title: 'Book Classifier App',
      description: 'Android app that classifies books from cover images using TensorFlow Lite.',
      tech: ['Android Studio', 'TensorFlow Lite', 'Teachable Machine'],
      icon: FiCode,
      features: ['Camera capture', 'Gallery selection', 'Real-time classification'],
    },
    {
      title: 'PlasticTrack+',
      description: 'Desktop app for monitoring and reducing plastic consumption with PDF reporting.',
      tech: ['Python', 'Tkinter', 'SQLite', 'ReportLab'],
      icon: FiDatabase,
      features: ['Interactive GUI', 'Data tracking', 'PDF report generation'],
    },
    {
      title: 'Prochestha',
      description: 'Web-based habit tracking system for recording and monitoring daily habits.',
      tech: ['PHP', 'MySQL', 'CSS'],
      icon: FiCode,
      features: ['Habit logging', 'Progress tracking', 'Responsive design'],
    },
    {
      title: 'Arohon',
      description: 'Dynamic web platform for university club information and career opportunities.',
      tech: ['PHP', 'MySQL', 'CSS'],
      icon: FiDatabase,
      features: ['Multi-role access', 'Club management', 'Event announcements'],
    },
    {
      title: 'UCamLite',
      description: 'University management system with role-based interfaces.',
      tech: ['Java', 'MySQL'],
      icon: FiCode,
      features: ['Student records', 'Attendance management', 'Marks tracking'],
    },
  ]

  return (
    <section id="projects" className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Projects
          </h2>
          <p className="text-[var(--text-secondary)] mt-3">Innovative solutions across web, mobile, and desktop</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              <project.icon className="w-8 h-8 text-[var(--flow-color)] mb-4" />
              <h3 className="text-lg font-bold text-[var(--text-primary)] mb-2">{project.title}</h3>
              <p className="text-sm text-[var(--text-secondary)] mb-4">{project.description}</p>
              <ul className="space-y-1 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-xs text-[var(--text-secondary)] flex items-center gap-2">
                    <span className="w-1 h-1 bg-[var(--flow-color)] rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-[var(--bg-primary)] text-[var(--text-secondary)] border border-[var(--border-color)]"
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