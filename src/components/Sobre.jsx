import { motion } from 'framer-motion'
import { FiCode, FiCpu, FiLayers } from 'react-icons/fi'

const cards = [
  {
    icon: <FiCode size={22} />,
    title: 'Fullstack Dev',
    desc: 'Criando aplicações completas — do frontend bonito ao backend robusto.',
  },
  {
    icon: <FiCpu size={22} />,
    title: 'Análise de Dados',
    desc: 'Transformando dados brutos em insights com Python, Pandas e SQL.',
  },
  {
    icon: <FiLayers size={22} />,
    title: 'Visão Completa',
    desc: 'Unindo código e dados para entregar soluções que realmente importam.',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
}

export default function Sobre() {
  return (
    <section
      id="sobre"
      style={{ padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      {/* Título */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.5rem' }}>
          Sobre <span className="gradient-text">mim</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      {/* Conteúdo */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}
           className="about-grid">
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p style={{ color: '#94a3b8', lineHeight: 1.85, marginBottom: '1rem', fontSize: '1rem' }}>
            Oi! Sou <strong style={{ color: '#e2e8f0' }}>Ivo Portugal Santana</strong>, tenho 18 anos e
            estou cursando <strong style={{ color: '#22d3ee' }}>Engenharia de Software</strong>.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.85, marginBottom: '1rem', fontSize: '1rem' }}>
            Meu foco é na interseção entre <strong style={{ color: '#e2e8f0' }}>desenvolvimento Fullstack</strong> e{' '}
            <strong style={{ color: '#a855f7' }}>análise de dados</strong> — construindo aplicações completas
            e extraindo inteligência dos dados que elas geram.
          </p>
          <p style={{ color: '#94a3b8', lineHeight: 1.85, fontSize: '1rem' }}>
            Acredito que unir código e dados é o diferencial do profissional de tecnologia do futuro.
          </p>

          <div style={{ marginTop: '2rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {['React', 'Node.js', 'JavaScript', 'Python', 'Pandas', 'SQL', 'Git'].map(tech => (
              <span
                key={tech}
                style={{
                  background: 'rgba(34,211,238,0.07)',
                  border: '1px solid rgba(34,211,238,0.2)',
                  color: '#22d3ee',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '999px',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="card-glow"
              style={{
                background: '#0f0f1a',
                borderRadius: '0.75rem',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                gap: '1rem',
                alignItems: 'flex-start',
              }}
            >
              <div style={{
                flexShrink: 0,
                width: '42px',
                height: '42px',
                borderRadius: '0.5rem',
                background: 'rgba(34,211,238,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#22d3ee',
              }}>
                {card.icon}
              </div>
              <div>
                <h3 style={{ color: '#f1f5f9', fontWeight: 700, marginBottom: '0.3rem', fontSize: '1rem' }}>{card.title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.88rem', lineHeight: 1.6 }}>{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
