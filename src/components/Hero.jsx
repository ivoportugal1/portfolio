import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'

const roles = [
  'Fullstack Developer',
  'Data Enthusiast',
  'Estudante de Eng. Software',
  'Construindo com dados & código',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = roles[roleIndex]

    if (!deleting && charIndex < current.length) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex + 1))
        setCharIndex(c => c + 1)
      }, 60)
      return () => clearTimeout(t)
    }

    if (!deleting && charIndex === current.length) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex > 0) {
      const t = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(c => c - 1)
      }, 35)
      return () => clearTimeout(t)
    }

    if (deleting && charIndex === 0) {
      setDeleting(false)
      setRoleIndex(i => (i + 1) % roles.length)
    }
  }, [charIndex, deleting, roleIndex])

  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '0 1.5rem',
        textAlign: 'center',
      }}
    >
      {/* Glow de fundo */}
      <div style={{
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(34,211,238,0.06) 0%, rgba(168,85,247,0.04) 50%, transparent 70%)',
        pointerEvents: 'none',
        zIndex: 0,
      }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px' }}>
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            background: 'rgba(34,211,238,0.08)',
            border: '1px solid rgba(34,211,238,0.2)',
            borderRadius: '999px',
            padding: '0.35rem 1rem',
            fontSize: '0.8rem',
            color: '#22d3ee',
            marginBottom: '1.5rem',
            fontWeight: 500,
          }}
        >
          <span style={{ width: '6px', height: '6px', background: '#22d3ee', borderRadius: '50%', display: 'inline-block', animation: 'pulse 2s infinite' }} />
          Disponível para oportunidades
        </motion.div>

        {/* Nome */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem', letterSpacing: '-1px', color: '#f1f5f9' }}
        >
          Olá, eu sou{' '}
          <span className="gradient-text">Ivo Portugal</span>
        </motion.h1>

        {/* Typing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{ fontSize: 'clamp(1.1rem, 3vw, 1.6rem)', color: '#94a3b8', marginBottom: '1.5rem', height: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.3rem' }}
        >
          <span>&gt;_ </span>
          <span style={{ color: '#e2e8f0', fontWeight: 600 }}>{displayed}</span>
          <span style={{ display: 'inline-block', width: '2px', height: '1.4em', background: '#22d3ee', animation: 'blink 1s step-end infinite', borderRadius: '1px' }} />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65 }}
          style={{ color: '#64748b', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7, fontSize: '1rem' }}
        >
          Estudante de Engenharia de Software apaixonado por construir aplicações completas
          e transformar dados em decisões inteligentes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}
        >
          <a href="#projetos" className="btn-primary">Ver projetos</a>
          <a href="#contato" className="btn-outline">Entre em contato</a>
        </motion.div>

        {/* Sociais */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          style={{ display: 'flex', gap: '1.25rem', justifyContent: 'center' }}
        >
          {[
            { icon: <FiGithub size={20} />, href: 'https://github.com/', label: 'GitHub' },
            { icon: <FiLinkedin size={20} />, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
          ].map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              title={s.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                border: '1px solid rgba(34,211,238,0.2)',
                color: '#94a3b8',
                transition: 'all 0.2s',
                textDecoration: 'none',
              }}
              onMouseEnter={e => { e.currentTarget.style.color = '#22d3ee'; e.currentTarget.style.borderColor = '#22d3ee'; e.currentTarget.style.background = 'rgba(34,211,238,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.borderColor = 'rgba(34,211,238,0.2)'; e.currentTarget.style.background = 'transparent' }}
            >
              {s.icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', color: '#475569', fontSize: '0.75rem' }}
      >
        <span>scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <FiArrowDown size={16} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
      `}</style>
    </section>
  )
}
