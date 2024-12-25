"use client"

import { Button } from "@/components/ui/button"
import { CardFooter } from "@/components/ui/card"
import { useApp } from "@/providers/app-provider"
import Link from "next/link"

export const OptionsFooter = () => {

    const { pairs, players } = useApp()

    return (
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
    )
}
