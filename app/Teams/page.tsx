"use client"
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import React from "react"
import useRandomTeam from "@/hooks/useRandomTeam"
import Hero from "./components/Hero"
import { TeamDetails } from "./components/TeamDetails"
import Contact from "@/app/services/components/Contact"

const Teams = () => {
  const { members } = useRandomTeam()

  const teamItems = members.map((member) => ({
    title: `${member.name.first} ${member.name.last}`,
    description: member.location.city, // Assuming member.location is an object, you can adjust this accordingly
    link: member.email,
    image: member.picture.large,
  }))

  return (
    <section>
      <Header />
      <Hero />
      <TeamDetails items={teamItems} className='mb-4' />
      <Contact />
      <Footer />
    </section>
  )
}

export default Teams
