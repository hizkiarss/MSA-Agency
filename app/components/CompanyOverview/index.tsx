"use client"

import { BsFillArrowUpRightCircleFill } from "react-icons/bs"
import React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Image from "next/image"
import project3 from "@/public/Homepage/OurProjects/project3.png"
import project6 from "@/public/Homepage/OurProjects/project6.png"
// import { TeamDetails } from "@/app/teams/components/TeamDetails"
import useRandomTeam from "@/hooks/useRandomTeam"
import Link from "next/link"
import milestoneDesktop from "@/public/About/milestone.png"
import Card from "@/components/Card"

const CompanyOverview = () => {
  const { members } = useRandomTeam()

  const teamItems = members.map((member) => ({
    image: member.picture.large,
  }))

  const teamItem = teamItems.slice(0, 3)

  return (
    <section className='mb-[50px] md:mb-[150px] '>
      <div>
        <div className=' items-center px-[15px] md:px-[30px] '>
          <div className='grid grid-cols-2'>
            <div className='col-span-1'></div>
            <Card>
              <div>
                <div className='flex'>
                  <h2 className='text-[35px] md:text-[70px] tracking-tighter mb'>
                    Value
                  </h2>
                  <p className='text-[10px] md:text-[16px]'>01</p>
                </div>
                <p className='text-[8px] md:text-[16px]'>
                  Collaboration is key to our success, as we believe that the
                  best outcomes are achieved when we work together, leveraging
                  the diverse strengths and perspectives of our team and
                  clients. Customer-centricity guides our approach, as we always
                  put our clients&#39; needs first.
                </p>
              </div>
            </Card>
          </div>

          <div className='grid grid-cols-2 '>
            <div>
              <Card>
                <div className='flex'>
                  <h2 className='text-[35px] md:text-[70px] tracking-tighter mb'>
                    Culture
                  </h2>
                  <p className='text-[10px] md:text-[16px]'>02</p>
                </div>
                <p className='text-[8px] md:text-[16px]'>
                  Our team operates in a supportive environment where every
                  voice is heard and valued. We prioritize continuous learning
                  to stay ahead in the fast-paced digital world. Transparency
                  and open communication are core to our relationships with
                  clients and within our team.
                </p>
              </Card>
            </div>
            <div className='col-span-1'></div>
          </div>

          <div className='grid grid-cols-2'>
            <div className='col-span-1'></div>
            <div>
              <Card>
                <div className='flex'>
                  <h2 className='text-[35px] md:text-[70px] tracking-tighter mb'>
                    History
                  </h2>
                  <p className='text-[10px] md:text-[16px]'>03</p>
                </div>
                <p className='text-[8px] md:text-[16px]'>
                  Established in 1980, MSA Digital Agency has been a pioneering
                  force in the digital landscape. Starting as a small team with
                  big ideas, we have grown into a renowned agency known for our
                  creative solutions and cutting-edge technology. Our journey
                  from humble beginnings to a leading digital agency is a
                  testament to our dedication and passion for excellence.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Accordion
        className='text-[20px] md:text-[55px] tracking-tighter mt-[50px] md:mt-[100px] '
        type='single'
        collapsible
      >
        <AccordionItem value='item-1'>
          <AccordionTrigger>
            <div className='font-normal w-full flex md:flex md:gap-0 justify-between px-[15px] md:px-10 items-center border-b-2 border-black md:py-10 hover:bg-black hover:text-white transition-all duration-300  '>
              <p className='text-[35px] col-span-1 md:text-[70px]'>240+</p>
              <p className='col-span-2 flex items-center gap-2 md:gap-8'>
                Projects Finished{" "}
                <BsFillArrowUpRightCircleFill className='size-5 md:size-14' />
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className='grid grid-rows-2 gap-[8px] md:grid-rows-1 md:grid-cols-3 px-[15px] py-10'>
            <div className='flex justify-center gap-[8px] md:gap-[14px] md:col-span-2'>
              <Image
                src={project3}
                alt='project3.png'
                className='w-[140px] md:w-[400px] h-fit'
              />
              <Image
                src={project6}
                alt='project6.png'
                className='w-[140px] md:w-[400px] h-fit'
              />
            </div>
            <div className='tracking-tight md:col-span-1 flex flex-col gap-2 md:gap-8 justify-center md:pl-[18px]'>
              <h2 className='text-[20px] md:leading-10 md:text-[40px] tracking-tighter'>
                MSA Digital Agency Projects
              </h2>
              <p className='text-[8px] leading-[13px] md:leading-5 md:text-[16px]'>
                At MSA Digital Agency, we&#39;ve crafted user-friendly websites,
                built robust e-commerce platforms, executed impactful digital
                marketing campaigns, and developed custom mobile apps for
                various industries, always focusing on innovation and client
                success.
              </p>

              <Link
                href='Services'
                className='bg-black text-white text-[8px] md:text-[16px] tracking-tight w-fit px-3 md:px-6 py-[1px] md:py-2 rounded-full '
              >
                Learn More
              </Link>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-2' className=''>
          <AccordionTrigger>
            <div className='font-normal w-full flex md:flex gap-5 md:gap-0 justify-between px-[15px] md:px-10 items-center border-b-2 border-black md:py-10 hover:bg-black hover:text-white transition-all duration-300  '>
              <p className='text-[35px] col-span-1 md:text-[70px]'>5+</p>
              <p className='col-span-2 flex items-center gap-2 md:gap-8'>
                Years Experience{" "}
                <BsFillArrowUpRightCircleFill className='size-5 md:size-14' />
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className='py-[30px] px-[15px] flex flex-col gap-4 items-center justify-center'>
            <div className='w-[300px] md:w-full flex'>
              {" "}
              <picture>
                <source
                  srcSet='Homepage\mobile-homepage-milestone.svg'
                  media='(max-width: 600px)'
                />
                <source
                  srcSet='About/milestone.png'
                  media='(min-width: 601px)'
                />
                <Image
                  src={milestoneDesktop}
                  alt='Milestone'
                  layout='responsive'
                  width={1200} // Adjust according to the image dimensions
                  height={800} // Adjust according to the image dimensions
                  className='px-[15px] md:px-[30px] w-[100px] h-[100px] md:w-[600px]'
                />
              </picture>
            </div>
            <Link
              href='About'
              className='bg-black rounded-full px-3 md:px-6 py-1 md:py-2 text-white text-[10px] md:text-[16px] tracking-tight'
            >
              See More
            </Link>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value='item-3'>
          <AccordionTrigger>
            <div className='font-normal w-full flex md:flex gap-5 md:gap-0 justify-between px-[15px] md:px-10 items-center border-b-2 border-black md:py-10 hover:bg-black hover:text-white transition-all duration-300  '>
              <p className='text-[35px] col-span-1 md:text-[70px]'>120</p>
              <p className='col-span-2 flex items-center gap-2 md:gap-8'>
                Team Members{" "}
                <BsFillArrowUpRightCircleFill className='size-5 md:size-14' />
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent className='px-[15px] md:px-[30px] py-10'>
            <div className='tracking-tight col-span-1 flex flex-col gap-4 md:gap-16'>
              <div className='col-span-1 flex gap-1 justify-center'>
                {teamItem.map((item, index) => {
                  return (
                    <Image
                      src={item.image}
                      key={index}
                      width={300}
                      height={300}
                      alt=''
                      className='rounded-full w-[100px] md:w-[200px] md:h-[200px]'
                    />
                  )
                })}
              </div>
              <div className='flex flex-col gap-3 md:gap-6 items-center'>
                <h2 className='text-[20px] text-center md:text-[55px] tracking-tighter md:mb-8 col-span-1'>
                  Meet Our Team{" "}
                </h2>
                <p className='text-[8px] text-center md:text-[20px] leading-[12px] md:leading-[25px] tracking-tight md:w-1/2'>
                  At MSA Digital Agency, our team is a dynamic group of
                  professionals passionate about digital innovation. Comprised
                  of skilled developers, creative designers, and strategic
                  marketers, we work collaboratively to deliver exceptional
                  results, driving the success of every project with creativity,
                  technical proficiency, and a client-centric approach.
                </p>
                <Link
                  className='bg-black text-white px-4 md:px-8 py-1 md:py-3 text-[12px] md:text-[20px] w-fit rounded-full'
                  href='Teams'
                >
                  See More
                </Link>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

export default CompanyOverview
