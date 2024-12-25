"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

interface AnimationProps {
    children: ReactNode
    index: number
}


export const Animation = ({ children, index }: AnimationProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
                duration: 0.3,
                delay: index * 0.2
            }}
        >
            {children}
        </motion.div>
    )
}