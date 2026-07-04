'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiDatabase, FiCloud, FiBriefcase } from 'react-icons/fi'

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { label: 'Projects', value: '8+' },
    { label: 'Experience', value: '3+ years' },
    { label: 'Tech Stack', value: '15+' },
    { label: 'Certifications', value: '8+' },
  ]

  return (
    <section id="about" className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            About Me
          </h2>
          <p className="text-[var(--text-secondary)] mt-3 max-w-2xl mx-auto">
            Building scalable backend systems and AI-powered applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-[var(--text-secondary)] leading-relaxed">
              I'm a final-year ICT student at Bangladesh University of Professionals with hands-on 
              experience building production-grade backend systems and AI-integrated applications. 
              Currently interning at Brain Station 23, where I've built data ingestion pipelines, 
              ML-integrated APIs, and geospatial systems for real-world Dhaka-based projects.
            </p>
            <p className="text-[var(--text-secondary)] leading-relaxed">
              My undergraduate thesis focuses on heart arrhythmia detection using CNN and Vision 
              Transformer architectures. I'm also the Chairperson of IEEE Computer Society BUP 
              Student Branch Chapter.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass-card p-4 text-center hover-glow"
              >
                <div className="text-2xl font-bold text-[var(--flow-color)]">{stat.value}</div>
                <div className="text-sm text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
            {[
              { icon: FiCode, label: 'Backend Dev', color: 'text-blue-400' },
              { icon: FiDatabase, label: 'Database Design', color: 'text-green-400' },
              { icon: FiCloud, label: 'Cloud & DevOps', color: 'text-yellow-400' },
              { icon: FiBriefcase, label: 'AI/ML Integration', color: 'text-pink-400' },
            ].map((item, index) => (
              <div
                key={index + 4}
                className="glass-card p-4 text-center hover-glow"
              >
                <item.icon className={`w-6 h-6 mx-auto mb-2 ${item.color}`} />
                <div className="text-sm text-[var(--text-secondary)]">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}