import {
    Avatar as AvatarPrimitive,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Ellipsis } from "lucide-react"
import { ComponentProps } from "react"

interface AvatarProps extends ComponentProps<"div"> { 
    src: string 
}

export const Avatar = ({ src, className }: AvatarProps) => {
    return (
        <AvatarPrimitive className={className}>
            <AvatarImage
                src={src}
                alt="avatar image"
            />
            <AvatarFallback>
                <Ellipsis />
            </AvatarFallback>
        </AvatarPrimitive>
    )
}
