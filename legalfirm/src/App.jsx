import { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import {About,Navbar, Footer, Hero, Team, Services} from './components'
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern w-full bg-cover bg-no-repeat bg-center">
      <Navbar/>
      <Hero/>
      </div>
      <About />
      <Services />
      <Team />
      <Footer />
    </div>
    </BrowserRouter>
  )
}

export default App
