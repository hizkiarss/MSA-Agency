import React from "react"

interface WhyChooseUsProps {
  row1: string
  row2: string
  row3: string
}

const WhyChooseUsItems: React.FC<WhyChooseUsProps> = ({ row1, row2, row3 }) => {
  return (
    <div className='md:grid grid-cols-8 py-4 md:py-8 border-t-2 border-gray-200 items-center tracking-tight text-[18px]'>
      <div className='flex gap-2 md:col-span-6 md:grid md:grid-cols-2'>
        <p className='col-span-1 text-[14px] md:text-[18px]'>{row1}</p>
        <p className='col-span-1 text-[14px] md:text-[18px]'>{row2}</p>
      </div>
      <p className='col-span-2 text-[12px] md:text-[13px] text-gray-400 tracking-tight'>
        {row3}
      </p>
    </div>
  )
}

export default WhyChooseUsItems
