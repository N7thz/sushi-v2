"use client"

import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import GridPattern from "@/components/ui/grid-pattern"

export const GridBackground = ({ children }: { children: ReactNode }) => {
    return (
        <div className="h-screen w-full relative flex flex-col overflow-hidden rounded-lg md:shadow-xl">
            {children}
            <GridPattern
                squares={[
                    [4, 4],
                    [5, 1],
                    [8, 2],
                    [5, 3],
                    [5, 5],
                    [10, 10],
                    [12, 15],
                    [15, 10],
                    [10, 15],
                    [15, 10],
                    [10, 15],
                    [15, 10],
                ]}
                className={cn(
                    "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
                    "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
                )}
            />
        </div>
    )
}
