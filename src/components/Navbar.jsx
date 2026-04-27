import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const links = [
  { label: 'Início', href: '#hero' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projetos', href: '#projetos' },
  { label: 'Contato', href: '#contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '1rem 2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        background: scrolled ? 'rgba(10,10,15,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(34,211,238,0.1)' : 'none',
        transition: 'all 0.3s ease',
      }}
    >
      {/* Logo */}
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <span className="gradient-text" style={{ fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.5px' }}>
          &lt;Ivo /&gt;
        </span>
      </a>

      {/* Links desktop */}
      <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', alignItems: 'center' }}
          className="hidden-mobile">
        {links.map(link => (
          <li key={link.href}>
            <a
              href={link.href}
              style={{
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 500,
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.target.style.color = '#22d3ee'}
              onMouseLeave={e => e.target.style.color = '#94a3b8'}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a href="#contato" className="btn-primary hidden-mobile" style={{ padding: '0.5rem 1.25rem', fontSize: '0.85rem' }}>
        Contato
      </a>

      {/* Hamburguer mobile */}
      <button
        onClick={() => setOpen(!open)}
        className="show-mobile"
        style={{ background: 'none', border: 'none', color: '#22d3ee', fontSize: '1.5rem', cursor: 'pointer' }}
      >
        {open ? <HiX /> : <HiMenu />}
      </button>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              right: 0,
              background: 'rgba(10,10,15,0.97)',
              backdropFilter: 'blur(12px)',
              borderBottom: '1px solid rgba(34,211,238,0.15)',
              padding: '1.5rem 2rem',
            }}
          >
            {links.map(link => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'block',
                  padding: '0.75rem 0',
                  color: '#94a3b8',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = '#22d3ee'}
                onMouseLeave={e => e.target.style.color = '#94a3b8'}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
