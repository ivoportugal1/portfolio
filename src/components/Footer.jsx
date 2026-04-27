import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(34,211,238,0.1)',
      padding: '2rem 1.5rem',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <span className="gradient-text" style={{ fontSize: '1.2rem', fontWeight: 800 }}>&lt;Ivo /&gt;</span>

        <div style={{ display: 'flex', gap: '1rem' }}>
          {[
            { icon: <FiGithub size={18} />, href: 'https://github.com/' },
            { icon: <FiLinkedin size={18} />, href: 'https://linkedin.com/in/' },
            { icon: <FiMail size={18} />, href: 'mailto:ivoportugal0114@gmail.com' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#475569',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p style={{ color: '#334155', fontSize: '0.8rem' }}>
          © {new Date().getFullYear()} Ivo Portugal Santana — Feito com React & ☕
        </p>
      </div>
    </footer>
  )
}
