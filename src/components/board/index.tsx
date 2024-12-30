"use client"

import { CardContent } from "@/components/ui/card"
import { FrontCard } from "@/components/card-flid/front-card"
import { BackCard } from "@/components/card-flid/back-card"
import { useBoard } from "./use-board"
import { cn } from "@/lib/utils"
import { useApp } from "@/providers/app-provider"
import { useRouter } from "next/navigation"

export const Board = () => {

    const { pairs, numberOfPlayers } = useApp()
    
    const { push } = useRouter()

    const {
        couples,
        selectedCouple1,
        selectedCouple2,
        couplesFound,
        setSelectCouple
    } = useBoard()

    if (!pairs || !numberOfPlayers) {

        push("/options")

        return <div className="page" />
    }

    return (
        <CardContent className={cn(
            "space-y-4 grid gap-4 place-items-center",
            pairs === "8"
                ? "grid-cols-4"
                : pairs === "12"
                    ? "grid-cols-6"
                    : "grid-cols-8"
        )}>
            {couples.map(icon => {

                const { id, name, Icon } = icon

                const isSelectedCouple1 = selectedCouple1?.id === id
                const isSelectedCouple2 = selectedCouple2?.id === id

                const isIconVisible =
                    isSelectedCouple1 ||
                    isSelectedCouple2 ||
                    couplesFound.includes(name!)

                if (isIconVisible) {
                    return (
                        <FrontCard
                            key={id}
                            className={cn(
                                couplesFound.includes(name!) && "bg-muted border-muted-foreground drop-shadow-2xl"
                            )}
                        >
                            <Icon />
                        </FrontCard>
                    )
                }

                return <BackCard
                    key={id}
                    onClick={() => setSelectCouple(icon)}
                />
            })}
        </CardContent>
    )
}