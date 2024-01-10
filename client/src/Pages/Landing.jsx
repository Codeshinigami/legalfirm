import { About, Hero, Team, Services } from '../components/LandingPage'

export default function Landing() {

  return (
    
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern w-full bg-cover bg-no-repeat bg-center b">
        <Hero />
      </div>
      <About />
      <Services />
      <Team />
      
    </div>
  )
}