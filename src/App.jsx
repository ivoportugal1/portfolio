import './index.css'
import ParticlesBg from './components/Particles'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Skills from './components/Skills'
import Projetos from './components/Projetos'
import Contato from './components/Contato'
import Footer from './components/Footer'

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <ParticlesBg />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <main>
          <Hero />
          <Sobre />
          <Skills />
          <Projetos />
          <Contato />
        </main>
        <Footer />
      </div>

      <style>{`
        .hidden-mobile { display: flex; }
        .show-mobile { display: none; }
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
      `}</style>
    </div>
  )
}

export default App
