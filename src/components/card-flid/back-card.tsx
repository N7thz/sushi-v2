import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export const BackCard = ({ className, ...props }: ComponentProps<"div">) => {
    return (
        <div
            className={cn(
                "size-16 rounded-lg flex items-center justify-center border border-border cursor-pointer duration-200 drop-shadow-xl",
                "hover:scale-105 hover:border-primary",
                "xl:size-20",
                "animate-rotate-y animate-once animate-duration-500 animate-ease-out animate-normal",
                className
            )}
            {...props}
        />
    )
}