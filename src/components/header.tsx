import { ConfigSheet } from "./config-sheet"
import { ModeToggle } from "./mode-toggle"

export const Header = () => {
    return (
        <div className="h-[68px] w-full border-b px-4 flex justify-end items-center bg-background z-10 gap-4">
            <ConfigSheet />
            <ModeToggle />
        </div>
    )
}
