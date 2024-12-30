"use client"

import { useApp } from "@/providers/app-provider"
import { playerObjects as playersAvatars } from "@/utils/players"
import { Avatar } from "@/components/avatar"
import { cn } from "@/lib/utils"

export const Score = () => {

    const { numberOfPlayers, currentPlayer } = useApp()

    function generateAvatar() {

        if (!numberOfPlayers) return null

        if (numberOfPlayers === "one") {
            return [currentPlayer]
        } else if (numberOfPlayers === "two") {
            return playersAvatars.slice(0, 2)
        }

        return playersAvatars
    }

    const avatars = generateAvatar()

    if (!avatars) return

    return (
        <div className="w-full p-4 flex gap-5 items-center border border-border rounded-lg">
            {
                avatars.map(({ avatarUrl, score }) => (
                    <>
                        <Avatar
                            src={avatarUrl}
                            className={cn(
                                currentPlayer.avatarUrl === avatarUrl &&
                                "border-2 border-primary scale-125 duration-200"
                            )}
                        />
                        <span>
                            {score}
                        </span>
                    </>
                ))
            }
        </div>
    )
}
