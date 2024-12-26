import { useApp } from "@/providers/app-provider"
import { pairsIcons } from "@/utils/pairs"
import { useEffect, useState } from "react"
import { v4 as randomUUID } from 'uuid'
import type { LucideIcon } from "lucide-react"
import { useBeforeunload } from "react-beforeunload"
import { playerObjects } from "@/utils/players"

export interface Couple {
    id: string
    Icon: LucideIcon
    name: string | undefined
}

export function useBoard() {

    const [couples, setCouples] = useState<Couple[]>([])
    const [selectedCouple1, setSelectedCouple1] = useState<Couple | null>(null)
    const [selectedCouple2, setSelectedCouple2] = useState<Couple | null>(null)
    const [couplesFound, setCouplesFound] = useState<string[]>([])

    const {
        pairs,
        currentPlayer,
        numberOfPlayers,
        setIsWin,
        setCurrentPlayer
    } = useApp()

    useBeforeunload(event => event.preventDefault())

    useEffect(() => prepareGame, [])

    useEffect(
        () => {
            if (!selectedCouple1 || !selectedCouple2) return

            if (selectedCouple1.name === selectedCouple2.name) {

                setCouplesFound(
                    oldValue => [...oldValue, selectedCouple1.name!]
                )

                setCurrentPlayer(oldValue => ({
                    ...oldValue,
                    score: oldValue.score + 1
                }))

                if (couplesFound.length + 1 === couples.length / 2) {
                    setIsWin(true)
                    alert("Congratulations, you won!")
                }
            }

            if (numberOfPlayers !== "one") {
                changeCurrentPLayer()
            }

            setTimeout(() => {
                setSelectedCouple1(null)
                setSelectedCouple2(null)
            }, 1000)
        },
        [selectedCouple1, selectedCouple2]
    )

    function changeCurrentPLayer() {

        const currentPlayerIndex = playerObjects.findIndex(
            player => player.name === currentPlayer.name
        )

        const lastIndex = playerObjects.length - 1

        if (currentPlayerIndex === lastIndex)
            setCurrentPlayer(playerObjects[currentPlayerIndex + 1])
        else
            setCurrentPlayer(playerObjects[0])
    }

    function prepareGame() {

        const icons = pairsIcons.slice(0, Number(pairs))

        const iconsDuplicated = icons.concat(icons)

        const couples = iconsDuplicated.map(icon => {

            const couple: Couple = {
                id: randomUUID(),
                Icon: icon,
                name: icon.displayName,
            }

            return couple
        })

        const shuffledCouples = shuffleArray(couples)

        setCouples(shuffledCouples)
    }

    function shuffleArray(array: Couple[]) {
        return array
            .map(value => ({ value, sort: Math.random() }))
            .sort((a, b) => a.sort - b.sort)
            .map(({ value }) => value)
    }

    function setSelectCouple(couple: Couple) {
        if (!selectedCouple1) {
            setSelectedCouple1(couple)
        } else if (!selectedCouple2) {
            setSelectedCouple2(couple)
        }
    }

    return {
        couples,
        selectedCouple1,
        selectedCouple2,
        couplesFound,
        setSelectCouple
    }
}