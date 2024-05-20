import React, { useEffect, useState } from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Hero from "./components/Hero"
import OurProjects from "./components/OurProjects"
import CompanyOverview from "./components/CompanyOverview"
import OurServices from "./components/OurServices"
import Testimonials from "./components/Testimonials"
import Cta from "./components/Cta"

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <OurProjects />
      <OurServices />
      <CompanyOverview />
      <Testimonials />
      <Cta />
      <Footer />
    </div>
  )
}

export default Homepage
