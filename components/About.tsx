'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiBriefcase, FiCode, FiDatabase, FiCloud } from 'react-icons/fi'

const stats = [
  { label: 'Projects', value: '8+' },
  { label: 'Years Coding', value: '3+' },
  { label: 'Tech Stack', value: '15+' },
  { label: 'Certifications', value: '8+' },
]

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">About Me</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Passionate about building scalable backend systems and AI-powered applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-gray-300 leading-relaxed">
              I'm a final-year ICT student at Bangladesh University of Professionals with hands-on 
              experience building production-grade backend systems and AI-integrated applications. 
              Currently interning at Brain Station 23, where I've built data ingestion pipelines, 
              ML-integrated APIs, and geospatial systems for real-world Dhaka-based projects.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My undergraduate thesis focuses on heart arrhythmia detection using CNN and Vision 
              Transformer architectures. I'm also the Chairperson of IEEE Computer Society BUP 
              Student Branch Chapter, leading technical events and community building.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="glass-card p-4 text-center hover-glow"
                >
                  <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: FiCode, label: 'Backend Dev', color: 'text-blue-400' },
              { icon: FiDatabase, label: 'Database Design', color: 'text-green-400' },
              { icon: FiCloud, label: 'Cloud & DevOps', color: 'text-yellow-400' },
              { icon: FiBriefcase, label: 'AI/ML Integration', color: 'text-pink-400' },
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card p-6 text-center hover-glow"
              >
                <item.icon className={`w-8 h-8 mx-auto mb-3 ${item.color}`} />
                <div className="text-sm text-gray-300">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}