import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {About,Navbar, Footer, Hero, Team, Services} from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center"></div>
      <Navbar/>
      <Hero/>
      <div></div>
      <About />
      <Services />
      <Team />
      <Footer />
    </div>
    </>
  )
}

export default App
