'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiGithub, FiExternalLink, FiCpu, FiDatabase, FiCode } from 'react-icons/fi'

const projects = [
  {
    title: 'Brain Tumor Detection Web Application',
    description: 'Detects brain tumors from MRI images using deep learning with Explainable AI (XAI) visualizations.',
    tech: ['Python', 'Deep Learning', 'XAI', 'TensorFlow'],
    icon: FiCpu,
    features: ['Image upload interface', 'Bounding box detection', 'XAI visual explanations'],
    link: '#',
    github: '#',
  },
  {
    title: 'Book Classifier App',
    description: 'Android application that classifies books from cover images using on-device TensorFlow Lite model.',
    tech: ['Android Studio', 'TensorFlow Lite', 'Teachable Machine'],
    icon: FiCode,
    features: ['Camera capture', 'Gallery selection', 'Real-time classification'],
    link: '#',
    github: '#',
  },
  {
    title: 'PlasticTrack+',
    description: 'Desktop application for monitoring and reducing plastic consumption with PDF reporting.',
    tech: ['Python', 'Tkinter', 'SQLite', 'ReportLab'],
    icon: FiDatabase,
    features: ['Interactive GUI', 'Data tracking', 'PDF report generation', 'Sustainability insights'],
    link: '#',
    github: '#',
  },
  {
    title: 'Prochestha',
    description: 'Web-based habit tracking system for recording and monitoring daily habits.',
    tech: ['PHP', 'MySQL', 'CSS'],
    icon: FiCode,
    features: ['Habit logging', 'Progress tracking', 'Responsive design'],
    link: '#',
    github: '#',
  },
  {
    title: 'Arohon',
    description: 'Dynamic web platform centralizing university club information and career opportunities.',
    tech: ['PHP', 'MySQL', 'CSS'],
    icon: FiDatabase,
    features: ['Multi-role access', 'Club management', 'Event announcements'],
    link: '#',
    github: '#',
  },
  {
    title: 'UCamLite',
    description: 'University management system with role-based interfaces for students and teachers.',
    tech: ['Java', 'MySQL'],
    icon: FiCode,
    features: ['Student records', 'Attendance management', 'Marks tracking'],
    link: '#',
    github: '#',
  },
]

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Projects</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Building innovative solutions across web, mobile, and desktop platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 hover-glow group"
            >
              <project.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <ul className="space-y-1 mb-4">
                {project.features.map((feature, i) => (
                  <li key={i} className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-dark/50 text-gray-400 border border-dark-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiGithub size={18} />
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <FiExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}