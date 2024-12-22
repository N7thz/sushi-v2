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
                    <SelectItem value="one">1</SelectItem>
                    <SelectItem value="two">2</SelectItem>
                    <SelectItem value="three">3</SelectItem>
                    <SelectItem value="four">4</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
