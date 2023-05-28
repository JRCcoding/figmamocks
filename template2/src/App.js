import './App.css'
import Hero from './components/Hero.js'
import Main from './components/Main.js'
import SecondaryServices from './components/SecondaryServices'
import Services from './components/Services'

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Hero />
      <Main />
      <Services />
      <SecondaryServices />
    </div>
  )
}

export default App
