import React from "react"
import Image from "next/image"
interface OurServicesItemsProps {
  img: string
  title: string
  description: string
}

const OurServicesItems: React.FC<OurServicesItemsProps> = ({
  img,
  title,
  description,
}) => {
  return (
    <div className='flex flex-col justify-start gap-[10px] md:gap-[20px] rounded-lg bg-[#f5f5f5]  px-[15px] md:px-[35px] py-[20px] md:py-[30px] hover:shadow-xl duration-300 hover:cursor-pointer'>
      <div>
        <Image
          src={`/${img}`}
          alt='icons.webp'
          width={30}
          height={30}
          className='h-[45px] w-fit md:h-[85px] bg-white px-3 md:px-6 py-3 md:py-6 rounded-full'
        />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-[15px] md:text-[23px] tracking-tight font-[500]'>
          {title}
        </p>
        <p className='text-[8px] md:text-[14px] text-gray-500 tracking-tight'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default OurServicesItems
