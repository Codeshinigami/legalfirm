import { About, Hero, Team, Services } from '../components/LandingPage'

export default function Landing() {

  return (
    
    <div className="relative z-0">
      <div className="bg-hero-pattern w-full bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Services />
      <Team />
      
    </div>
  )
}