import { OptionsFooter } from "@/components/options-footer"
import { SelectPairs } from "@/components/select-pairs"
import { SelectPlayers } from "@/components/select-players"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function Options() {
    return (
        <div className="page">
            <Card className="w-1/4 flex flex-col justify-between z-10 bg-background drop-shadow-2xl">
                <CardHeader>
                    <CardTitle>
                        Sushi Memory Game
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <SelectPlayers />
                    <SelectPairs />
                </CardContent>
                <OptionsFooter />
            </Card>
        </div>
    )
}