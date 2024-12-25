import { Card, CardHeader } from "@/components/ui/card"
import { Board } from "@/components/board"
import { Score } from "@/components/score"

export default function Game() {
    return (
        <div className="page">
            <Card className="size-11/12 flex flex-col gap-12 bg-background z-10 drop-shadow-2xl">
                <CardHeader className="flex-row justify-between">
                    <Score />
                </CardHeader>
                <Board />
            </Card>
        </div>
    )
}