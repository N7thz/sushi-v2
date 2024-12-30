import { LucideIcon } from "lucide-react"
import { ReactNode } from "react"

export type LayoutProps = {
    children: ReactNode
}

export type Pairs = "8" | "12" | "16"

export type NumberOfPlayers = "one" | "two" | "four"

export interface Couple {
    id: string
    Icon: LucideIcon
    name: string | undefined
}