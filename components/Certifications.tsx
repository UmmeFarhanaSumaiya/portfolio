'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCheckCircle } from 'react-icons/fi'

const certifications = [
  { name: 'Full Stack Development with MERN', issuer: 'GP Academy' },
  { name: 'AWS Cloud Technical Essentials', issuer: 'GP Academy' },
  { name: 'CS50\'s Introduction to Programming with Python', issuer: 'Harvard University' },
  { name: 'Career with AI', issuer: 'GP Academy' },
  { name: 'Globalization with ICT', issuer: 'GP Academy' },
  { name: 'YSSE Virtual Internship Program (Batch 14)', issuer: 'YSSE' },
  { name: 'YSSE Virtual Internship Program (Batch 13)', issuer: 'YSSE' },
]

export default function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="certifications" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Certifications</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Professional certifications and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card p-4 hover-glow flex items-start gap-3"
            >
              <FiCheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm font-medium text-white">{cert.name}</h4>
                <p className="text-xs text-gray-400">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}