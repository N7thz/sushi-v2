import { Pairs } from "@/@types"
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

export const SelectPairs = () => {

    const { setPairs } = useApp()

    function setValue(value: string) {

        const pairs = value as Pairs

        setCookie("pairs", value)
        setPairs(pairs)
    }

    return (
        <Select onValueChange={(value) => setValue(value)}>
            <SelectTrigger>
                <SelectValue placeholder="Select the number of pairs" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>Pairs</SelectLabel>
                    <SelectItem value="8">8</SelectItem>
                    <SelectItem value="16">16</SelectItem>
                    <SelectItem value="32">32</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
