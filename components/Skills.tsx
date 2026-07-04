'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  SiPython, SiJavascript, SiPhp,
  SiReact, SiNodedotjs, SiExpress, SiFastapi, SiNextdotjs,
  SiTailwindcss, SiTensorflow, SiScikitlearn, SiPandas,
  SiPostgresql, SiMysql, SiMongodb, SiSqlite,
  SiRedis, SiDocker, SiGit, SiPostman,
} from 'react-icons/si'
import { DiJava } from 'react-icons/di'
import { FiDatabase, FiCloud, FiCode } from 'react-icons/fi'
import { IconType } from 'react-icons'

type Skill = {
  name: string
  icon?: IconType
  color: string
}

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories: { name: string; icon: IconType; skills: Skill[] }[] = [
    {
      name: 'Languages',
      icon: FiCode,
      skills: [
        { name: 'Python', icon: SiPython, color: '#3776AB' },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
        { name: 'PHP', icon: SiPhp, color: '#777BB4' },
        { name: 'Java', icon: DiJava, color: '#007396' },
        { name: 'SQL', icon: FiDatabase, color: '#4479A1' },
      ],
    },
    {
      name: 'Frameworks & Libraries',
      icon: FiCode,
      skills: [
        { name: 'React.js', icon: SiReact, color: '#61DAFB' },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933' },
        { name: 'Express.js', icon: SiExpress, color: '#000000' },
        { name: 'FastAPI', icon: SiFastapi, color: '#009688' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'Scikit-learn', icon: SiScikitlearn, color: '#F7931E' },
        { name: 'Pandas', icon: SiPandas, color: '#150458' },
        { name: 'TensorFlow', icon: SiTensorflow, color: '#FF6F00' },
      ],
    },
    {
      name: 'Databases & DevOps',
      icon: FiDatabase,
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
        { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
        { name: 'SQLite', icon: SiSqlite, color: '#003B57' },
        { name: 'Redis', icon: SiRedis, color: '#DC382D' },
        { name: 'Docker', icon: SiDocker, color: '#2496ED' },
        { name: 'Git', icon: SiGit, color: '#F05032' },
        { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      ],
    },
    {
      name: 'ML & AI',
      icon: FiCloud,
      skills: [
        { name: 'CNN', color: '#6C63FF' },
        { name: 'Vision Transformer', color: '#FF6584' },
        { name: 'DBSCAN', color: '#00D4FF' },
        { name: 'Isolation Forest', color: '#FFB800' },
        { name: 'XAI', color: '#00E676' },
      ],
    },
  ]

  return (
    <section id="skills" className="py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--text-primary)]">
            Technical Skills
          </h2>
          <p className="text-[var(--text-secondary)] mt-3">Technologies and tools I work with</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-5 h-5 text-[var(--flow-color)]" />
                <h3 className="text-lg font-bold text-[var(--text-primary)]">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--bg-primary)] border border-[var(--border-color)] hover:border-[var(--flow-color)] transition-colors group"
                  >
                    {skill.icon && <skill.icon className="w-4 h-4" style={{ color: skill.color }} />}
                    <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}