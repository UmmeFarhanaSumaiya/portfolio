'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCalendar, FiMapPin, FiAward } from 'react-icons/fi'

const education = [
  {
    degree: 'Bachelor of Science in Information and Communication Engineering',
    institution: 'Bangladesh University of Professionals',
    location: 'Dhaka, Bangladesh',
    period: 'Jul 2022 - Present',
    cgpa: '3.36/4.00',
    details: ['Final year student', 'Undergraduate thesis on heart arrhythmia detection using CNN and Vision Transformer'],
  },
  {
    degree: 'Higher Secondary School Certificate (HSC)',
    institution: 'BAF Shaheen College, Jashore',
    location: 'Jashore, Bangladesh',
    period: '2020',
    cgpa: 'GPA 5.00/5.00',
    details: ['Science group'],
  },
]

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id="education" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Education</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Academic journey and achievements
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 hover-glow"
            >
              <div className="flex items-start gap-2 text-primary text-sm mb-2">
                <FiAward />
                <span>CGPA {edu.cgpa}</span>
              </div>
              <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
              <p className="text-primary text-sm font-medium">{edu.institution}</p>
              <div className="flex items-center gap-4 text-sm text-gray-400 mt-2">
                <span className="flex items-center gap-1">
                  <FiCalendar className="text-primary" />
                  {edu.period}
                </span>
                <span className="flex items-center gap-1">
                  <FiMapPin className="text-primary" />
                  {edu.location}
                </span>
              </div>
              <ul className="mt-3 space-y-1">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-center gap-2">
                    <span className="w-1 h-1 bg-primary rounded-full" />
                    {detail}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}