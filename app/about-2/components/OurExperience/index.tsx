import React from "react"
import Image from "next/image"
import founder from "@/public/About/founder.jpg"

const OurExperience = () => {
  return (
    <section className='px-[15px] md:px-[30px] pt-[100px] md:py-[200px]'>
      <div className='flex flex-col gap-5'>
        <p className='text-[15px] md:text-[20px] tracking-tighter'>
          Our Experience
        </p>
        <h2 className='text-[30px] md:text-[55px] tracking-tighter leading-[35px] md:leading-[70px] w-11/12'>
          With a combined experience of over 5 years, the team at MSA Design
          Space excels in creative branding and web design.
        </h2>
      </div>

      <div className='md:grid grid-cols-8 gap-10 md:gap-10 mobile-switch'>
        <div className='col-span-3 order-2 md:order-1'></div>
        <div className='col-span-3 flex flex-col justify-between text-[13px] text-gray-400 order-1 md:order-2 mt-[30px] md:mt-0 leading-tight md:leading-normal'>
          <p>
            As MSA — Creative Branding and Web Design Agency, we specialize in
            crafting comprehensive brand strategies and identities, along with
            providing services in web design, website development, packaging
            design, and social media marketing. Our commitment to excellence and
            passion for creativity have allowed us to successfully elevate
            brands worldwide, leaving a lasting impression in the digital
            landscape.
          </p>
          <div className='flex justify-end text-end md:justify-normal md:text-left mt-8 md:mt-0'>
            <p className='tracking-tighter leading-[20px] md:leading-normal text-[15px] md:text-[18px] text-black'>
              Marina Suvorova <br />
              Founder and Head of Design
            </p>
          </div>
        </div>
        <div className='col-span-2 order-3 md:order-1 flex justify-end md:justify-normal '>
          <Image
            src={founder}
            alt='founder.jpg'
            className='w-[200px] md:w-full'
          />
        </div>
      </div>
    </section>
  )
}

export default OurExperience
