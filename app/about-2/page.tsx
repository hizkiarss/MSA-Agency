import Header from "@/components/Header"
import React from "react"
import WhyChooseUs from "./components/WhyChooseUs"
import Hero from "./components/Hero"
import OurExperience from "./components/OurExperience"
import Footer from "@/components/Footer"
import Image from "next/image"
import Contact from "@/components/Contact"

// Import images for different resolutions
import milestoneDesktop from "@/public/About/milestone.png"
// import milestoneMobile from "@/public/About/milestone-mobile.png"

const About = () => {
  return (
    <section>
      <Header />
      <Hero />
      <WhyChooseUs />

      <picture>
        <source srcSet='About/milestonemobile.svg' media='(max-width: 600px)' />
        <source srcSet='About/milestone.png' media='(min-width: 601px)' />
        <Image
          src={milestoneDesktop}
          alt='Milestone'
          layout='responsive'
          width={1200} // Adjust according to the image dimensions
          height={800} // Adjust according to the image dimensions
          className='px-[15px] md:px-[30px] w-[auto] h-[auto]'
        />
      </picture>

      <OurExperience />
      <Contact />
      <Footer />
    </section>
  )
}

export default About
