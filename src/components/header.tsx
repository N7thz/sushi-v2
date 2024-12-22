import React from "react"
import { ModeToggle } from "./mode-toggle"

export const Header = () => {
    return (
        <div className="h-[68px] border-b px-4 flex justify-end rounded-none items-center">
            <ModeToggle />
        </div>
    )
}
