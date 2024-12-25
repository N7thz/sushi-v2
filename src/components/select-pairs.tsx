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
import { pairs } from "@/utils/pairs"
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
                    {
                        pairs.map(pair => (
                            <SelectItem value={pair}>
                                {pair}
                            </SelectItem>
                        ))
                    }
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}
