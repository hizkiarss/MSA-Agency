import React from "react"
import Image from "next/image"
import Link from "next/link"

const WorkProcess = () => {
  return (
    <section id='detail' className='mx-[15px] md:mx-[30px] pb-0 md:pb-[40px]'>
      <div className='md:grid md:grid-cols-6 border-b-2 border-gray-200 pb-12'>
        <div className='col-span-2 flex gap-[2px] md:gap-0 md:flex md:flex-col mb-[15px] md:mb-0 '>
          <p className='col-span-2 tracking-tighter'>Work Process</p>
          <p className='tracking-tight'>(brief description)</p>
        </div>
        <h2 className='col-span-4 text-[35px] md:text-[70px] tracking-tighter leading-[40px] md:leading-[80px]  '>
          From consultation to launch, we guide you through every step,
          delivering expert results.
        </h2>
      </div>

      <div className='md:grid md:grid-cols-6 mt-10'>
        <div className=' flex justify-between md:justify-normal items-end md:items-start md:flex-col gap-4 col-span-2 mb-4 md:mb-0'>
          <p className='text-[18px] tracking-tight'>(1) Branding projects</p>
          <Link
            href='Services#contact'
            className='w-fit h-fit px-4 md:px-8 py-1 md:py-2 bg-black text-white rounded-full text-[12px]'
          >
            Start a project
          </Link>
        </div>

        <div className='md:col-span-4'>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
            <Image
              src='/Homepage/OurProjects/project4.webp'
              alt='Project4.webp'
              width={300}
              height={300}
              className='w-full'
            />
            <Image
              src='/Homepage/OurProjects/project7.webp'
              alt='Project7.webp'
              width={300}
              height={300}
              className='w-full'
            />
          </div>

          <div className='flex flex-col gap-10'>
            <p className='pt-[20px] text-[13px] md:text-[15px] text-gray-700 tracking-tighter'>
              Our comprehensive brand identity services extend beyond logo
              design, encompassing the development of brand guidelines,
              typography, and color palettes to ensure consistency across all
              touchpoints. Recognizing that each business is unique, we offer
              tailored services to meet your specific needs, including packaging
              design, printing, editorial design, and social media graphics.
              With a flexible approach and a commitment to excellence, we craft
              cohesive branding solutions that set you apart in the market,
              leaving a lasting impression on your audience.
            </p>

            <div className='flex flex-col gap-5 tracking-tight'>
              <div className=' flex flex-col gap-3'>
                <p className='text-[16px] md:text-[18px] '>
                  (1) Discovery & Analysis
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Begin with a focused conversation about your vision, goals,
                  and objectives. Discuss your target audience, competitors, and
                  existing brand elements. Conduct market research and analyze
                  industry trends and audience preferences to guide the process.
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='text-[16px] md:text-[18px] '>
                  (2) Creative Direction & Strategy
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Establish a clear creative direction that aligns with your
                  vision and goals. Collaborate to define the overall aesthetic
                  and style of your brand. For the comprehensive package, shape
                  a thorough brand strategy that includes mission, values, and
                  market positioning.
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='text-[16px] md:text-[18px] '>(3) Logo Design</p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Based on the established creative direction, we create
                  concepts for your primary and secondary logos. Iterate and
                  refine designs based on your feedback.
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='text-[16px] md:text-[18px] '>
                  (4) Brand Elements Design
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Customize key elements like color palette, typography suite,
                  and brand patterns to match your brand's personality. Provide
                  guidance on visual styles and source quality imagery.
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='text-[16px] md:text-[18px] '>
                  (5) Brand Collateral & Instagram Templates
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Design brand collaterals such as business cards, letterheads,
                  or other options. For the Brand Sprint package, you can choose
                  one collateral, while the comprehensive package includes three
                  collaterals and six editable Instagram post templates for
                  social media consistency.
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='text-[16px] md:text-[18px] '>(6) Brand Guide</p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Compile all elements into a guide that provides clear
                  instructions for using each element and maintaining
                  consistency across all platforms. The comprehensive package
                  includes a detailed final brand guide, while the Brand Sprint
                  provides a concise mini guide.
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='text-[16px] md:text-[18px] '>
                  (7) Delivery & Handoff
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Deliver final files in required formats after your approval.
                  Provide all necessary assets and instructions for implementing
                  your new brand identity.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='md:grid md:grid-cols-6 mt-16 pt-10 border-t-2 border-gray-200'>
        <div className=' flex flex-col gap-4 col-span-2'>
          <div className='flex md:flex-col justify-between md:justify-normal gap-4 mb-4 md:mb-0'>
            <p className='text-[18px] tracking-tight'>
              (2) Web Design projects
            </p>
            <Link
              href='Services#contact'
              className='w-fit h-fit px-4 md:px-8 py-1 md:py-2 bg-black text-white rounded-full text-[12px]'
            >
              Start a project
            </Link>
          </div>
        </div>

        <div className='col-span-4'>
          <div className='flex flex-col md:grid md:grid-cols-2 gap-5'>
            <Image
              src='/Homepage/OurProjects/project3.webp'
              alt='Project3.webp'
              width={300}
              height={300}
              className='w-full'
            />
            <Image
              src='/Homepage/OurProjects/project6.webp'
              alt='Project6.webp'
              width={300}
              height={300}
              className='w-full'
            />
          </div>

          <div className='flex flex-col gap-10'>
            <p className='pt-[20px] text-[12px] md:text-[15px] text-gray-700 tracking-tight'>
              From captivating landing pages to robust e-commerce platforms and
              multi-page websites, we specialize in creating stunning websites
              that not only look great but also drive results. Our low-code
              solutions ensure fast turnaround times without compromising on
              quality, ensuring seamless functionality across all devices.
            </p>

            <div className='flex flex-col gap-5 tracking-tight'>
              <div className=' flex flex-col gap-3'>
                <p className='md:text-[18px] text-[16px] '>
                  (1) Discovery & Analysis
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  We consult with you to understand your project's goals and
                  vision, conducting competitor analysis to identify your
                  website's unique value proposition.{" "}
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='md:text-[18px] text-[16px] '>
                  (2) Prototype & Design Discussion
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  We create a website prototype to structure the layout and
                  discuss design references with user interaction expectations
                  for a cohesive experience.
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='md:text-[18px] text-[16px] '>
                  (3) Design Concepts & Content Assistance
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  We develop several design concepts reflecting your brand
                  identity and goals, iterating based on your feedback. We help
                  edit and optimize website content for your brand voice.{" "}
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='md:text-[18px] text-[16px] '>
                  (4) Efficient Layout & Development
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Create efficient layouts based on selected concept and utilize
                  low-code solutions for high-quality, swift development.{" "}
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='md:text-[18px] text-[16px] '>
                  (5) Optimization & Animation
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Optimize the website for seamless user experience across all
                  devices. Apply modern animations for enhanced aesthetics and
                  engagement.{" "}
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='md:text-[18px] text-[16px] '>
                  (6) SEO, Domain Connection & Launch
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Implement basic SEO for improved visibility and manage domain
                  connection with other technical settings for a smooth launch.{" "}
                </p>
              </div>

              <div className=' flex flex-col gap-3'>
                <p className='md:text-[18px] text-[16px] '>
                  (7) Post-Launch Support
                </p>
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  Offer 2-week support post-launch to address any issues or
                  questions, providing help with adjustments or training if
                  needed.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkProcess
