"use client"

import { CardContent } from "@/components/ui/card"
import { FrontCard } from "@/components/card-flid/front-card"
import { BackCard } from "@/components/card-flid/back-card"
import { useBoard } from "./use-board"
import { cn } from "@/lib/utils"

export const Board = () => {

    const {
        couples,
        selectedCouple1,
        selectedCouple2,
        couplesFound,
        setSelectCouple
    } = useBoard()

    return (
        <CardContent className="space-y-4 grid grid-cols-4 gap-4 place-items-center">
            {
                couples.map(icon => {

                    const { id, Icon } = icon

                    const isSelectedCouple1 = selectedCouple1?.id === id
                    const isSelectedCouple2 = selectedCouple2?.id === id

                    const isIconVisible =
                        isSelectedCouple1 ||
                        isSelectedCouple2 ||
                        couplesFound.includes(icon.name!)

                    if (isIconVisible) {
                        return (
                            <FrontCard
                                key={id}
                                className={cn(
                                    couplesFound.includes(icon.name!) && "bg-muted border-muted-foreground drop-shadow-2xl"
                                )}
                            >
                                <Icon />
                            </FrontCard>
                        )
                    }

                    return <BackCard onClick={() => setSelectCouple(icon)} />
                })
            }
        </CardContent>
    )
}