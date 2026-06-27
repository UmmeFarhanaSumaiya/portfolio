'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi'
import { FaLocationDot } from 'react-icons/fa6'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium"
            >
              🚀 Final Year ICT Student @ BUP
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="gradient-text">Umme Farhana</span>
              <br />
              <span className="text-white">Sumaiya</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-lg">
              Backend Developer & AI/ML Enthusiast building production-grade systems with Python, 
              FastAPI, and PostgreSQL.
            </p>

            <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
              <span className="flex items-center gap-2">
                <FaLocationDot className="text-primary" />
                Dhaka, Bangladesh
              </span>
              <span className="w-px h-4 bg-dark-border" />
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </span>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-primary hover:bg-primary/80 text-white rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-[0_0_30px_-10px_#6C63FF]"
              >
                Get in Touch
              </a>
              <a
                href="/resume.pdf"
                className="px-6 py-3 border border-dark-border hover:border-primary text-white rounded-xl font-medium transition-all duration-300 flex items-center gap-2 hover:bg-primary/10"
              >
                <FiDownload /> Download CV
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/UmmeFarhanaSumaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-dark-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <FiGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/umme-farhana-sumaiya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-dark-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <FiLinkedin size={20} />
              </a>
              <a
                href="mailto:farhana23sumaiya@gmail.com"
                className="p-3 rounded-full border border-dark-border hover:border-primary hover:bg-primary/10 transition-all duration-300"
              >
                <FiMail size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary to-secondary opacity-20 blur-3xl animate-pulse" />
              <div className="relative w-full h-full rounded-full border-2 border-primary/30 overflow-hidden bg-dark-card/50 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-7xl mb-4">👩‍💻</div>
                  <div className="text-sm text-gray-400">Building the future</div>
                  <div className="text-xs text-primary mt-2">one line of code at a time</div>
                </div>
              </div>
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin-slow" style={{ animationDuration: '20s' }} />
              <div className="absolute -inset-8 rounded-full border border-secondary/20 animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }} />
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-gray-500 text-sm">
          <span>Scroll to explore</span>
          <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </motion.div>
    </section>
  )
}