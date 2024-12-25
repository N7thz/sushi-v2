"use client"

import { MotionProps, motion } from "framer-motion"
import { ReactNode } from "react"

type AnimationProps = MotionProps & {
    children: ReactNode
}

export const Animation = ({ children, ...props }: AnimationProps) => {
    return (
        <motion.div {...props}>
            {children}
        </motion.div>
    )
}
