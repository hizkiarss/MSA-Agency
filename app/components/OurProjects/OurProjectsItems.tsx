"use client"

import Image from "next/image"
import React from "react"

interface OurProjectsItemsProps {
  projectImage: string
  projectTitle: string
  projectType: string
  top: string[]
}

const OurProjectsItems: React.FC<OurProjectsItemsProps> = ({
  projectImage,
  projectTitle,
  projectType,
  top,
}) => {
  return (
    <div className='mr-4'>
      <div className='absolute top-5 left-5 text-black'>
        {top.map((e, index) => {
          return (
            <p
              key={index}
              className='bg-white mb-3 px-3 py-1 rounded-full text-black text-[12px] md:text-[12px] w-fit'
            >
              {e}
            </p>
          )
        })}
      </div>
      <Image src={projectImage} alt='project.jpg' />
      <div className='flex justify-between text-[10px] md:text-[13px] mt-3 font-[300] tracking-tighter'>
        <p>{projectTitle}</p>
        <p className='text-gray-400'>{projectType}</p>
      </div>
    </div>
  )
}

export default OurProjectsItems
