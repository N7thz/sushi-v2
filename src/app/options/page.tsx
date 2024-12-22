"use client"

import { SelectPairs } from "@/components/select-pairs"
import { SelectPlayers } from "@/components/select-players"
import { Button } from "@/components/ui/button"
import {
    Card, CardHeader, CardTitle, CardFooter, CardContent
} from "@/components/ui/card"
import { useApp } from "@/providers/app-provider"
import Link from "next/link"

export default function Options() {

    const { pairs, players } = useApp()

    console.log(pairs, players)

    return (
        <div className="page">
            <Card className="w-1/4 flex flex-col justify-between">
                <CardHeader>
                    <CardTitle>
                        Sushi Memory Game
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <SelectPlayers />
                    <SelectPairs />
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    <Link
                        href="/game"
                        className="w-full"
                    >
                        <Button
                            className="w-full"
                            disabled={!pairs || !players}
                        >
                            Play
                        </Button>
                    </Link>
                    <Link
                        href="/"
                        className="w-full"
                    >
                        <Button className="w-full">
                            Back
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}