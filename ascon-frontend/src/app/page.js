import Image from 'next/image'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-[#FFF5E1]">
      <Navbar/>
      <HeroSection />
      <div className="container mx-auto px-6 py-4 mt-24">
        
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
