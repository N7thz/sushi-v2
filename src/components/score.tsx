"use client"

import { useApp } from "@/providers/app-provider"
import { playerObjects as playersAvatars } from "@/utils/players"
import {
    Avatar, AvatarFallback, AvatarImage,
} from "@/components/ui/avatar"
import { Ellipsis } from "lucide-react"

export const Score = () => {

    const { numberOfPlayers, currentPlayer } = useApp()

    console.log(currentPlayer)

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
        <div className="w-full p-3 flex gap-5 items-center border border-border rounded-lg">
            {
                avatars.map(({ avatarUrl, score }) => (
                    <>
                        <Avatar>
                            <AvatarImage
                                src={avatarUrl}
                                alt="@shadcn"
                            />
                            <AvatarFallback>
                                <Ellipsis />
                            </AvatarFallback>
                        </Avatar>
                        <span>
                            {score}
                        </span>
                    </>
                ))
            }
        </div>
    )
}
