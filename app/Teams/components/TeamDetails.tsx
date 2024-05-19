import { GoLocation } from "react-icons/go"
import { cn } from "@/utils/cn"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"
import { useState } from "react"
import Image from "next/image"

export const TeamDetails = ({
  items,
  className,
}: {
  items: {
    title: string
    description: string
    link: string
    image: string
  }[]
  className?: string
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div
      className={cn(
        "grid grid-cols-2 md:grid-cols-3 md:px-[100px] md:py-10 mb-[100px]",
        className
      )}
    >
      {items.map((item, idx) => (
        <div>
          {" "}
          <Link
            href={item?.link}
            key={item?.link}
            className='relative group block p-2 h-full w-full'
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className='absolute inset-0 h-full w-full bg-[#e0e0e0] dark:bg-slate-800/[0.8] block  rounded-3xl'
                  layoutId='hoverBackground'
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card className=''>
              <div className='grid grid-rows md:grid-rows-3 '>
                <div className='row-span-2'>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={50}
                    height={50}
                    objectFit='cover'
                    className='rounded-xl md:h-[300px] !w-full object-cover'
                  />
                </div>
                <div className='row-span-1 grid grid-rows-2'>
                  <CardTitle className='font-[400] text-[15px] md:text-[40px] text-black tracking-tight row-span-1'>
                    {item.title}
                  </CardTitle>
                  <div className='row-span-1 '>
                    <div className='flex items-center gap-[8px] mb-2'>
                      <GoLocation className='text-gray-400' size={20} />
                      <CardDescription className='text-[12px] md:text-[20px] tracking-tight'>
                        {item.description}
                      </CardDescription>
                    </div>
                    <div className='flex justify-start'>
                      {" "}
                      <p className='tracking-tight text-[10px] md:text-[14px] break-words w-full'>
                        {item.link}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>
      ))}
    </div>
  )
}

export const Card = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full md:p-4 overflow-hidden bg-[#f5f5f5] border border-transparent dark:border-white/[0.2] group-hover: relative z-20",
        className
      )}
    >
      <div className='relative z-50 '>
        <div className='p-4 md:p-4'>{children}</div>
      </div>
    </div>
  )
}

export const CardTitle = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  )
}

export const CardDescription = ({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) => {
  return (
    <p
      className={cn(
        "text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  )
}
