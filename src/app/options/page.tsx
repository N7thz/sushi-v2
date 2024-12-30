import { OptionsFooter } from "@/components/options-footer"
import { SelectPairs } from "@/components/select-pairs"
import { SelectPlayers } from "@/components/select-players"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export default function Options() {
    return (
        <div className="page">
            <Card className={cn(
                "w-1/4 flex flex-col justify-between z-10 drop-shadow-2xl",
                "max-sm:w-10/12"
            )}>
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