import { useApp } from "../contexts/AppContext"
import Hero from "../components/Hero"
import Services from "../components/Services"
import About from "../components/About"
import Testimonials from "../components/Testimonials"
import Contact from "../components/Contact"

interface HomePageProps {
  onNavigate?: (page: string) => void
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Services />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}