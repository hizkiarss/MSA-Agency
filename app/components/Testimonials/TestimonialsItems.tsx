import React from "react"
import { HiOutlineOfficeBuilding } from "react-icons/hi"
import { BsFillPersonFill } from "react-icons/bs"

interface TestimonialsItemsProps {
  img: string
  name: string
  position: string
  title: string
  testi: string
}

const TestimonialsItems: React.FC<TestimonialsItemsProps> = ({
  img,
  name,
  position,
  title,
  testi,
}) => {
  return (
    <div
      className='relative h-full bg-cover bg-center grid grid-rows-3 px-4 md:px-6 py-4 md:py-6 -z-[2]'
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
      <div className='row-span-2 flex  md: flex-col gap-2'>
        <p className='bg-white rounded-full px-3 py-1 text-[8px] md:text-[13px] w-fit h-fit col-span-1'>
          {name}
        </p>
        <p className='bg-black text-white rounded-full px-3 py-1 text-[8px] h-fit md:text-[13px] w-fit col-span-1'>
          {position}
        </p>
      </div>

      <div className='text-white row-span-1 grid grid-rows-2'>
        <p className='tracking-tight text-[15px] md:text-[20px] font-[500]'>
          {title}
        </p>
        <p className='tracking-tight text-white pl-1 text-[8px] md:text-[15px] '>
          {testi}
        </p>
      </div>

      {/* Image overlay */}
      <div
        className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent via-50% to-black  -z-[1]'
        aria-hidden='true'
      ></div>
    </div>
  )
}

export default TestimonialsItems
