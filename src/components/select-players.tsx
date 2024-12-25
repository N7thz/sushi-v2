"use client"

import { NumberOfPlayers } from "@/@types"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { useApp } from "@/providers/app-provider"
import { players as playersOptions } from "@/utils/players"
import { setCookie } from "cookies-next"
import { definesTheNumberOfAvatars } from "@/utils/define-number-avatars"
import AvatarCircles from "./ui/avatar-circles"

export const SelectPlayers = () => {

    const { setNumberOfPlayers } = useApp()

    function setValue(value: string) {

        const numberOfPlayers = value as NumberOfPlayers

        setCookie("players", value)
        setNumberOfPlayers(numberOfPlayers)
    }

    return (
        <Select onValueChange={(value) => setValue(value)}>
            <SelectTrigger>
                <SelectValue placeholder="Select the number of players" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Players</SelectLabel>
                    {
                        playersOptions.map(player => {

                            const players = definesTheNumberOfAvatars(player)

                            return (
                                <div
                                    key={player}
                                    className="flex items-center justify-between"
                                >
                                    <SelectItem
                                        value={player}
                                        className="flex-row items-center justify-between w-min focus:bg-background focus:underline"
                                    >
                                        {player}
                                    </SelectItem>
                                    <AvatarCircles avatarUrls={players} />
                                </div>
                            )
                        })
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
