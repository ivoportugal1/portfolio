import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projetos = [
  {
    title: 'PortugaTask',
    desc: 'Gerenciador de tarefas com CRUD completo, filtros por status, prioridades e barra de progresso. Salva tudo no localStorage.',
    tags: ['React', 'Framer Motion', 'localStorage'],
    github: 'https://github.com/ivoportugal1/PortugaTask',
    demo: 'https://portuga-task.vercel.app',
    gradient: 'linear-gradient(135deg, #22d3ee22, #06b6d422)',
    color: '#22d3ee',
    status: 'No ar',
  },
  {
    title: 'MotorHub CRM',
    desc: 'CRM fullstack completo para gestão de oficinas automotivas. Clientes, ordens de serviço, estoque, financeiro e relatórios.',
    tags: ['React', 'Node.js', 'SQLite', 'Express'],
    github: 'https://github.com/ivoportugal1/motorhubcrm',
    demo: 'https://motorhubcrm.vercel.app',
    gradient: 'linear-gradient(135deg, #a855f722, #7c3aed22)',
    color: '#a855f7',
    status: 'No ar',
  },
  {
    title: 'Data Dashboard',
    desc: 'Dashboard interativo de análise de dados com gráficos dinâmicos, filtros e visualizações construídas com Python e Pandas.',
    tags: ['Python', 'Pandas', 'SQL'],
    github: 'https://github.com/',
    demo: '#',
    gradient: 'linear-gradient(135deg, #10b98122, #059b7222)',
    color: '#10b981',
    status: 'Em breve',
  },
]

export default function Projetos() {
  return (
    <section
      id="projetos"
      style={{ padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.5rem' }}>
          Meus <span className="gradient-text">Projetos</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '1.5rem' }}>
        {projetos.map((proj, i) => (
          <motion.div
            key={proj.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            whileHover={{ y: -6 }}
            className="card-glow"
            style={{
              background: '#0f0f1a',
              borderRadius: '1rem',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Preview banner */}
            <div style={{
              height: '140px',
              background: proj.gradient,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <span style={{
                fontSize: '3.5rem',
                fontWeight: 900,
                color: proj.color,
                opacity: 0.15,
                letterSpacing: '-2px',
                userSelect: 'none',
              }}>
                {proj.title.split(' ')[0]}
              </span>
              <div style={{
                position: 'absolute',
                top: '0.75rem',
                right: '0.75rem',
                background: 'rgba(10,10,15,0.7)',
                border: `1px solid ${proj.color}44`,
                color: proj.color,
                fontSize: '0.7rem',
                fontWeight: 600,
                padding: '0.2rem 0.6rem',
                borderRadius: '999px',
              }}>
                {proj.status}
              </div>
            </div>

            {/* Conteúdo */}
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
              <h3 style={{ color: '#f1f5f9', fontWeight: 700, fontSize: '1.1rem', marginBottom: '0.6rem' }}>
                {proj.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.65, flex: 1, marginBottom: '1.25rem' }}>
                {proj.desc}
              </p>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
                {proj.tags.map(tag => (
                  <span
                    key={tag}
                    style={{
                      background: `${proj.color}12`,
                      border: `1px solid ${proj.color}30`,
                      color: proj.color,
                      padding: '0.2rem 0.6rem',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 500,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ display: 'flex', gap: '0.75rem' }}>
                <a
                  href={proj.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: '#94a3b8',
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#f1f5f9'}
                  onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
                >
                  <FiGithub size={15} /> Código
                </a>
                <a
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    color: proj.color,
                    textDecoration: 'none',
                    fontSize: '0.82rem',
                    fontWeight: 500,
                    transition: 'opacity 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.7'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <FiExternalLink size={15} /> Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
