import React from 'react'
import Hero from '../components/Hero'
import Testimonials from '../components/Testimonials'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <Footer />
    </div>
  )
}

export default Home