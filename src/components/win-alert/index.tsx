"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar } from "@/components/avatar"
import { useWinAlert } from "./use-win-alert"
import { Crown } from "lucide-react"
import { useRouter } from "next/navigation"
import { useApp } from "@/providers/app-provider"

export const WinAlert = () => {

    const {
        sortedPlayers, isWin, sameScore, winnerPlayer
    } = useWinAlert()

    const { push } = useRouter()
    const { setIsWin, reseteAllValues } = useApp()

    return (
        <AlertDialog
            open={isWin}
            onOpenChange={setIsWin}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {
                            sameScore
                                ? "The game is a draw."
                                : `The player ${winnerPlayer.name} wins!`
                        }
                    </AlertDialogTitle>
                    <Card className="border-none">
                        <CardHeader>
                            <CardTitle>
                                Score
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 divide-y-2">
                            {sortedPlayers.map(({ avatarUrl, score }) => (
                                <div
                                    key={avatarUrl}
                                    className="flex items-center gap-3 justify-between"
                                >
                                    <div className="flex items-center gap-3">
                                        <Avatar
                                            src={avatarUrl}
                                            className="mt-4"
                                        />
                                        <span className="text-xl mt-4">
                                            {score}
                                        </span>
                                    </div>
                                    {
                                        (avatarUrl === winnerPlayer.avatarUrl && !sameScore) &&
                                        <Crown
                                            className="mt-4 text-amber-500 rotate-12 size-8"
                                        />
                                    }
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogAction onClick={() => push("/options")}>
                        Back
                    </AlertDialogAction>
                    <AlertDialogAction
                        onClick={() => reseteAllValues(sortedPlayers)}
                    >
                        Play again
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}