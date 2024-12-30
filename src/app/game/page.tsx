import { Card, CardHeader } from "@/components/ui/card"
import { Board } from "@/components/board"
import { Score } from "@/components/score"
import { WinAlert } from "@/components/win-alert"
import { cn } from "@/lib/utils"

export default function Game() {
    return (
        <div className="page">
            <Card className={cn(
                "size-11/12 flex flex-col gap-12 z-10 drop-shadow-2xl",
                "max-sm:w-11/12 max-sm:h-4/5",
                "xl:size-3/4",
            )}>
                <CardHeader className="flex-row justify-between">
                    <Score />
                </CardHeader>
                <Board />
            </Card>
            <WinAlert />
        </div>
    )
}