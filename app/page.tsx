'use client'

import { useRef } from 'react'
import Navigation from '@/components/Navigation'
import PipelineHero from '@/components/PipelineHero'
import About from '@/components/About'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'

export default function Home() {
  const sectionRefs = {
    about: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  }

  const scrollToSection = (sectionId: string) => {
    const ref = sectionRefs[sectionId as keyof typeof sectionRefs]
    if (ref?.current) {
      const offset = 80
      const elementPosition = ref.current.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <>
      <Navigation />
      <main>
        <PipelineHero onNodeClick={scrollToSection} />
        
        <div ref={sectionRefs.about}>
          <About />
        </div>
        <div ref={sectionRefs.education}>
          <Education />
        </div>
        <div ref={sectionRefs.experience}>
          <Experience />
        </div>
        <div ref={sectionRefs.skills}>
          <Skills />
        </div>
        <div ref={sectionRefs.projects}>
          <Projects />
        </div>
        <Certifications />
        <div ref={sectionRefs.contact}>
          <Contact />
        </div>
      </main>
    </>
  )
}