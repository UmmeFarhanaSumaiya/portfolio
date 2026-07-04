'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiMapPin } from 'react-icons/fi'

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const education = [
    {
      degree: 'B.Sc. in ICT Engineering',
      institution: 'Bangladesh University of Professionals',
      location: 'Dhaka, Bangladesh',
      period: 'Jul 2022 - Present',
      result: 'CGPA 3.36/4.00',
      details: ['Final year student', 'Thesis: Heart arrhythmia detection using CNN and Vision Transformer'],
      current: true,
    },
    {
      degree: 'HSC',
      institution: 'BAF Shaheen College, Jashore',
      location: 'Jashore Board',
      period: '2020',
      result: 'GPA 5.00/5.00',
      details: ['Science group'],
    },
    {
      degree: 'SSC',
      institution: 'BAF Shaheen College, Jashore',
      location: 'Jashore Board',
      period: '2017',
      result: 'GPA 5.00/5.00',
      details: ['Science group'],
    },
    {
      degree: 'JSC',
      institution: 'BAF Shaheen College, Jashore',
      location: 'Jashore Board',
      period: '2014',
      result: 'GPA 5.00/5.00',
      details: [],
    },
    {
      degree: 'PSC',
      institution: 'BAF Shaheen College, Jashore',
      location: 'Jashore Board',
      period: '2011',
      result: 'GPA 5.00/5.00',
      details: [],
    },
  ]

  return (
    <section id="education" className="py-16 md:py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Education
          </h2>
          <p className="text-[var(--text-secondary)] mt-3">The academic route so far</p>
        </motion.div>

        <div className="relative">
          {education.map((edu, index) => {
            const isLeft = index % 2 === 0

            return (
              <div
                key={index}
                className="grid mb-2"
                style={{ gridTemplateColumns: '1fr 2.5rem 1fr', alignItems: 'stretch' }}
              >
                {/* LEFT card slot */}
                <div className={`flex items-center ${isLeft ? 'justify-end pr-8' : ''}`}>
                  {isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      className="glass-card p-5 hover-glow w-full"
                    >
                      <div className="text-right">
                        <span className="text-xs font-mono text-[var(--flow-color)]">{edu.period}</span>
                        <h3 className="text-base font-bold text-[var(--text-primary)] mt-1">{edu.degree}</h3>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">{edu.institution}</p>
                        <p className="flex items-center justify-end gap-1 text-xs text-[var(--text-secondary)] mt-1">
                          <FiMapPin className="text-[var(--flow-color)] flex-shrink-0" /> {edu.location}
                        </p>
                        <p className="text-sm font-semibold text-[var(--flow-color)] mt-2">{edu.result}</p>
                        {edu.details.length > 0 && (
                          <ul className="mt-2 space-y-1 list-none">
                            {edu.details.map((d, i) => (
                              <li key={i} className="text-xs text-[var(--text-secondary)]">{d}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* CENTER: dot + vertical line only */}
                <div className="flex flex-col items-center">
                  <div
                    className={`rounded-full flex-shrink-0 mt-8 ${
                      edu.current ? 'w-6 h-6 animate-pulse' : 'w-5 h-5'
                    }`}
                    style={{ backgroundColor: 'var(--flow-color)' }}
                  />
                  {index !== education.length - 1 && (
                    <div className="w-0.5 flex-1 my-1" style={{ backgroundColor: 'var(--flow-color)' }} />
                  )}
                </div>

                {/* RIGHT card slot */}
                <div className={`flex items-center ${!isLeft ? 'justify-start pl-8' : ''}`}>
                  {!isLeft && (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
                      className="glass-card p-5 hover-glow w-full"
                    >
                      <div className="text-left">
                        <span className="text-xs font-mono text-[var(--flow-color)]">{edu.period}</span>
                        <h3 className="text-base font-bold text-[var(--text-primary)] mt-1">{edu.degree}</h3>
                        <p className="text-sm text-[var(--text-secondary)] mt-1">{edu.institution}</p>
                        <p className="flex items-center justify-start gap-1 text-xs text-[var(--text-secondary)] mt-1">
                          <FiMapPin className="text-[var(--flow-color)] flex-shrink-0" /> {edu.location}
                        </p>
                        <p className="text-sm font-semibold text-[var(--flow-color)] mt-2">{edu.result}</p>
                        {edu.details.length > 0 && (
                          <ul className="mt-2 space-y-1 list-disc list-inside">
                            {edu.details.map((d, i) => (
                              <li key={i} className="text-xs text-[var(--text-secondary)]">{d}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        <p className="text-center text-sm font-mono text-[var(--flow-color)] opacity-70 mt-2">
          starting point ↑
        </p>
      </div>
    </section>
  )
}