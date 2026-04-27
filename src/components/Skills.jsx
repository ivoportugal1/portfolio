import { motion } from 'framer-motion'
import {
  SiReact, SiNodedotjs, SiJavascript, SiHtml5,
  SiGit, SiGithub, SiMysql, SiPython, SiTailwindcss,
  SiPandas,
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'
import { FiBarChart2 } from 'react-icons/fi'

const skillGroups = [
  {
    label: 'Fullstack',
    color: '#22d3ee',
    skills: [
      { icon: <SiReact />, name: 'React', level: 70, color: '#61dafb' },
      { icon: <SiJavascript />, name: 'JavaScript', level: 75, color: '#f7df1e' },
      { icon: <SiNodedotjs />, name: 'Node.js', level: 60, color: '#68a063' },
      { icon: <SiHtml5 />, name: 'HTML5', level: 90, color: '#e34f26' },
      { icon: <FaCss3Alt />, name: 'CSS3', level: 85, color: '#264de4' },
      { icon: <SiTailwindcss />, name: 'Tailwind', level: 65, color: '#38bdf8' },
    ],
  },
  {
    label: 'Dados',
    color: '#a855f7',
    skills: [
      { icon: <SiPython />, name: 'Python', level: 55, color: '#3776ab' },
      { icon: <SiPandas />, name: 'Pandas', level: 45, color: '#150458' },
      { icon: <SiMysql />, name: 'SQL', level: 60, color: '#00758f' },
      { icon: <FiBarChart2 />, name: 'Power BI', level: 40, color: '#f2c811' },
    ],
  },
  {
    label: 'Ferramentas',
    color: '#10b981',
    skills: [
      { icon: <SiGit />, name: 'Git', level: 70, color: '#f05032' },
      { icon: <SiGithub />, name: 'GitHub', level: 75, color: '#e2e8f0' },
    ],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.5rem' }}>
          Minhas <span className="gradient-text">Skills</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {skillGroups.map((group, gi) => (
          <div key={group.label}>
            {/* Label do grupo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}
            >
              <span style={{
                background: `${group.color}18`,
                border: `1px solid ${group.color}44`,
                color: group.color,
                fontSize: '0.75rem',
                fontWeight: 700,
                padding: '0.25rem 0.85rem',
                borderRadius: '999px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
              }}>
                {group.label}
              </span>
              <div style={{ flex: 1, height: '1px', background: `${group.color}20` }} />
            </motion.div>

            {/* Cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(175px, 1fr))', gap: '1rem' }}>
              {group.skills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: gi * 0.1 + i * 0.07, duration: 0.4 }}
                  whileHover={{ y: -4 }}
                  className="card-glow"
                  style={{
                    background: '#0f0f1a',
                    borderRadius: '0.75rem',
                    padding: '1.25rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <span style={{ fontSize: '1.5rem', color: skill.color }}>{skill.icon}</span>
                    <span style={{ color: '#e2e8f0', fontWeight: 600, fontSize: '0.9rem' }}>{skill.name}</span>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '999px', height: '5px', overflow: 'hidden' }}>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: gi * 0.1 + i * 0.07 + 0.3, duration: 0.8, ease: 'easeOut' }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(90deg, ${skill.color}88, ${skill.color})`,
                        borderRadius: '999px',
                      }}
                    />
                  </div>

                  <span style={{ color: '#475569', fontSize: '0.75rem', fontWeight: 500 }}>{skill.level}%</span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
