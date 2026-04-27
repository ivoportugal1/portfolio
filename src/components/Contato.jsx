import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi'

export default function Contato() {
  const [form, setForm] = useState({ nome: '', email: '', mensagem: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    // Abre o cliente de email com os dados preenchidos
    const subject = encodeURIComponent(`Contato via portfólio - ${form.nome}`)
    const body = encodeURIComponent(`Nome: ${form.nome}\nEmail: ${form.email}\n\n${form.mensagem}`)
    window.open(`mailto:ivoportugal0114@gmail.com?subject=${subject}&body=${body}`)
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(34,211,238,0.15)',
    borderRadius: '0.5rem',
    padding: '0.85rem 1rem',
    color: '#e2e8f0',
    fontSize: '0.9rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    fontFamily: 'inherit',
  }

  return (
    <section
      id="contato"
      style={{ padding: '6rem 1.5rem', maxWidth: '1000px', margin: '0 auto' }}
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 800, color: '#f1f5f9', marginBottom: '0.5rem' }}>
          Entre em <span className="gradient-text">Contato</span>
        </h2>
        <div className="section-line" />
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}
           className="contact-grid">

        {/* Info */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p style={{ color: '#94a3b8', lineHeight: 1.8, marginBottom: '2rem', fontSize: '1rem' }}>
            Estou aberto a oportunidades, parcerias e bate-papos sobre tecnologia.
            Me manda uma mensagem!
          </p>

          {[
            { icon: <FiMail size={18} />, label: 'ivoportugal0114@gmail.com', href: 'mailto:ivoportugal0114@gmail.com' },
            { icon: <FiGithub size={18} />, label: 'github.com/ivoportugal', href: 'https://github.com/' },
            { icon: <FiLinkedin size={18} />, label: 'linkedin.com/in/ivoportugal', href: 'https://linkedin.com/in/' },
          ].map(item => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.9rem',
                color: '#94a3b8',
                textDecoration: 'none',
                marginBottom: '1rem',
                fontSize: '0.9rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#22d3ee'}
              onMouseLeave={e => e.currentTarget.style.color = '#94a3b8'}
            >
              <span style={{
                color: '#22d3ee',
                background: 'rgba(34,211,238,0.08)',
                border: '1px solid rgba(34,211,238,0.2)',
                borderRadius: '0.5rem',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
              }}>
                {item.icon}
              </span>
              {item.label}
            </a>
          ))}
        </motion.div>

        {/* Formulário */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
        >
          <div>
            <label style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 500, display: 'block', marginBottom: '0.4rem' }}>
              Nome
            </label>
            <input
              name="nome"
              value={form.nome}
              onChange={handleChange}
              required
              placeholder="Seu nome"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#22d3ee66'}
              onBlur={e => e.target.style.borderColor = 'rgba(34,211,238,0.15)'}
            />
          </div>

          <div>
            <label style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 500, display: 'block', marginBottom: '0.4rem' }}>
              Email
            </label>
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="seu@email.com"
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = '#22d3ee66'}
              onBlur={e => e.target.style.borderColor = 'rgba(34,211,238,0.15)'}
            />
          </div>

          <div>
            <label style={{ color: '#64748b', fontSize: '0.8rem', fontWeight: 500, display: 'block', marginBottom: '0.4rem' }}>
              Mensagem
            </label>
            <textarea
              name="mensagem"
              value={form.mensagem}
              onChange={handleChange}
              required
              rows={5}
              placeholder="Sua mensagem..."
              style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
              onFocus={e => e.target.style.borderColor = '#22d3ee66'}
              onBlur={e => e.target.style.borderColor = 'rgba(34,211,238,0.15)'}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              background: sent ? 'linear-gradient(135deg, #10b981, #059669)' : 'linear-gradient(135deg, #22d3ee, #a855f7)',
              color: '#0a0a0f',
              fontWeight: 700,
              fontSize: '0.9rem',
              padding: '0.85rem',
              border: 'none',
              borderRadius: '0.5rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              transition: 'background 0.3s',
            }}
          >
            <FiSend size={16} />
            {sent ? 'Mensagem enviada!' : 'Enviar mensagem'}
          </motion.button>
        </motion.form>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
        }
      `}</style>
    </section>
  )
}
