"use client"
import { motion, Variants } from "framer-motion"

const cardVariants: Variants = {
  offscreen: {
    y: 300,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
}

import React from "react"

const Card: React.FC<{ children: JSX.Element | React.ReactNode }> = ({
  children,
}) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true }}
      variants={cardVariants}
    >
      {children}
    </motion.div>
  )
}

export default Card
