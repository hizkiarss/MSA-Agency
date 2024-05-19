"use client"

import { AiOutlinePlus } from "react-icons/ai"
import { AiOutlineMinus } from "react-icons/ai"
import React from "react"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react"
import ServiceDetailData from "@/utils/ServicePageData/ServiceDetailData"

interface ServiceDetailProps {
  title: string
  briefDesc: string
  title2: string
  list: string[]
  details: string[]
}
const ServiceDetailItem: React.FC<ServiceDetailProps> = ({
  title,
  briefDesc,
  title2,
  list,
  details,
}) => {
  return (
    <div className='px-0'>
      <Accordion allowMultiple>
        <AccordionItem className='px-0'>
          {({ isExpanded }) => (
            <>
              <h1>
                <AccordionButton className='px-0 mx-0'>
                  <Box
                    className='text-[16px] md:text-[20px] items-start py-[10px] md:py-[20px] tracking-tight'
                    as='span'
                    flex='1'
                    textAlign='left'
                  >
                    {title}
                  </Box>
                  {isExpanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </AccordionButton>
              </h1>
              <AccordionPanel
                className='grid grid-cols gap-[20px] tracking-tight'
                pb={4}
              >
                <p className='text-[12px] md:text-[14px] text-gray-400'>
                  {briefDesc}{" "}
                </p>
                <p className='text-[14px] md:text-[16px]'>{title2}</p>
                <div className='text-[12px] md:text-[14px] text-gray-400'>
                  {list.map((item, key) => {
                    return <li key={key}>{item}</li>
                  })}
                </div>
                <div className='text-[12px] md:text-[14px] text-gray-400'>
                  {details.map((item, key) => {
                    return <ul key={key}>{item}</ul>
                  })}
                </div>
              </AccordionPanel>
            </>
          )}
        </AccordionItem>
      </Accordion>
    </div>
  )
}

const ServiceDetail: React.FC = () => {
  return (
    <section className='md:grid md:grid-cols-3 gap-[40px] px-[15px] md:px-[30px] pt-[25px] md:pt-[50px] mb-[100px] md:mb-[150px]'>
      <div className='md:col-span-1 md:pt-3 tracking-tighter mb-[20px] md:mb-0 ml-[3px] md:ml-0'>
        Services We Offer
      </div>
      <div className='md:col-span-2 pb-0 mb-0'>
        <h2 className='text-[40px] md:text-[70px] tracking-tighter leading-[40px] md:leading-[80px]'>
          Tailored design packages for your business success that we offer.
        </h2>
        <div className='mt-[30px] '>
          {ServiceDetailData.map((e, index) => (
            <ServiceDetailItem {...e} key={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceDetail
