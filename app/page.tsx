'use client'

import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <ParticleBackground />
      <Navigation />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
    </main>
  )
}