'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import { FiMail, FiMapPin, FiSend, FiGithub, FiLinkedin, FiCheckCircle } from 'react-icons/fi'

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('sent')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="py-16 md:py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Get in Touch
          </h2>
          <p className="text-[var(--text-secondary)] mt-3">Have a project in mind? Let's connect!</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="glass-card p-6 hover-glow">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[var(--flow-color)]/10 text-[var(--flow-color)]">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Email</p>
                  <a href="mailto:farhana23sumaiya@gmail.com" className="text-[var(--text-primary)] hover:text-[var(--flow-color)] transition-colors">
                    farhana23sumaiya@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-glow">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-[var(--flow-color)]/10 text-[var(--flow-color)]">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-[var(--text-secondary)]">Location</p>
                  <p className="text-[var(--text-primary)]">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="https://github.com/UmmeFarhanaSumaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full glass-card hover-glow"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/umme-farhana-sumaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full glass-card hover-glow"
              >
                <FiLinkedin size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-6 space-y-4">
              <div>
                <label className="text-sm text-[var(--text-secondary)] block mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--flow-color)] focus:outline-none text-[var(--text-primary)] transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm text-[var(--text-secondary)] block mb-1">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--flow-color)] focus:outline-none text-[var(--text-primary)] transition-colors"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="text-sm text-[var(--text-secondary)] block mb-1">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] focus:border-[var(--flow-color)] focus:outline-none text-[var(--text-primary)] transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === 'sent'
                    ? 'bg-green-500 text-white'
                    : 'bg-[var(--flow-color)] hover:opacity-80 text-white hover:scale-[1.02]'
                }`}
              >
                {status === 'sending' && <>⏳ Sending...</>}
                {status === 'sent' && <><FiCheckCircle /> Sent!</>}
                {status === 'idle' && <><FiSend /> Send Message</>}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}