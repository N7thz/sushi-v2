import { Card, CardHeader } from "@/components/ui/card"
import { Board } from "@/components/board"
import { Score } from "@/components/score"
import { WinAlert } from "@/components/win-alert"

export default function Game() {
    return (
        <div className="page">
            <Card className="size-11/12 flex flex-col gap-12 z-10 drop-shadow-2xl">
                <CardHeader className="flex-row justify-between">
                    <Score />
                </CardHeader>
                <Board />
            </Card>
            <WinAlert />
        </div>
    )
}