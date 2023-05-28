import './App.css'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero.js'
import Main from './components/Main.js'
import SecondaryServices from './components/SecondaryServices'
import Services from './components/Services'
import Testymonials from './components/Testymonials'

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Hero />
      <Main />
      <Services />
      <SecondaryServices />
      <Testymonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
