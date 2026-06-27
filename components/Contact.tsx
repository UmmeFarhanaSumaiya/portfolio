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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStatus('sent')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text">Get in Touch</h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let's connect!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 hover-glow">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FiMail size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:farhana23sumaiya@gmail.com" className="text-white hover:text-primary transition-colors">
                    farhana23sumaiya@gmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="glass-card p-6 hover-glow">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Location</p>
                  <p className="text-white">Dhaka, Bangladesh</p>
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
                <FiGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/umme-farhana-sumaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-full glass-card hover-glow"
              >
                <FiLinkedin size={24} />
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
                <label htmlFor="name" className="text-sm text-gray-400 block mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-dark-border focus:border-primary focus:outline-none text-white transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="text-sm text-gray-400 block mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-dark-border focus:border-primary focus:outline-none text-white transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="text-sm text-gray-400 block mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-dark/50 border border-dark-border focus:border-primary focus:outline-none text-white transition-colors resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className={`w-full py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === 'sent'
                    ? 'bg-green-500 text-white'
                    : 'bg-primary hover:bg-primary/80 text-white hover:scale-105 shadow-[0_0_30px_-10px_#6C63FF]'
                }`}
              >
                {status === 'sending' && (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                )}
                {status === 'sent' && (
                  <>
                    <FiCheckCircle /> Sent!
                  </>
                )}
                {status === 'idle' && (
                  <>
                    <FiSend /> Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}