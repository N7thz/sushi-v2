"use client"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useApp } from "@/providers/app-provider"
import { Avatar } from "./avatar"

export const WinAlert = () => {

    const { isWin, setIsWin, players } = useApp()

    return (
        <AlertDialog
            open={isWin}
            onOpenChange={setIsWin}
        >
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        The player {players[0].name} wins!
                    </AlertDialogTitle>
                    <Card className="border-none">
                        <CardHeader>
                            <CardTitle>
                                Score
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4 divide-y-2">
                            {players.map(({ avatarUrl, score }) => (
                                <div className="flex items-center gap-3">
                                    <Avatar
                                        src={avatarUrl}
                                        className="mt-4"
                                    />
                                    <span className="text-xl mt-4">
                                        {score}
                                    </span>
                                </div>
                            ))}
                        </CardContent>
                    </Card>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}