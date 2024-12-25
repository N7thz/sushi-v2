import { Players } from "@/@types"
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
import { players } from "@/utils/players"
import { setCookie } from "cookies-next"

export const SelectPlayers = () => {

    const { setPlayers } = useApp()

    function setValue(value: string) {

        const players = value as Players

        setCookie("pairs", value)
        setPlayers(players)
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
                        players.map(player => (
                            <SelectItem value={player}>
                                {player}
                            </SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
