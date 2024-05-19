import React from "react"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Contact from "./components/Contact"
import ServiceDetail from "./components/ServiceDetail"
import WorkProcess from "./components/WorkProcess"

const Services = () => {
  return (
    <section>
      <Header />
      <ServiceDetail />
      <WorkProcess />
      <Contact />
      <Footer />
    </section>
  )
}

export default Services
