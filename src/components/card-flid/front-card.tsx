import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

export const FrontCard = ({
    children, className, ...props
}: ComponentProps<"div">) => {
    return (
        <div
            className={cn(
                "size-16 rounded-lg flex items-center justify-center border border-border",
                "animate-rotate-y animate-once animate-duration-500 animate-ease-out animate-normal",
                className
            )}
            {...props}
        >
            {children}
        </div>
    )
}
