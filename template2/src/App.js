import './App.css'
import Hero from './components/Hero.js'
import Main from './components/Main.js'
import Services from './components/Services'

function App() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Hero />
      <Main />
      <Services />
    </div>
  )
}

export default App
