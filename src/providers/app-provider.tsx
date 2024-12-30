"use client"

import { LayoutProps, Pairs, NumberOfPlayers, Couple } from "@/@types"
import { playerObjects, Player } from "@/utils/players"
import {
    createContext, Dispatch, SetStateAction, useContext, useState
} from "react"

interface AppContextProps {
    reseteAllValues(sortedPlayers: Player[]): void
    isWin: boolean
    setIsWin: Dispatch<SetStateAction<boolean>>
    numberOfPlayers: NumberOfPlayers | null
    setNumberOfPlayers: Dispatch<SetStateAction<NumberOfPlayers | null>>
    pairs: Pairs | null
    setPairs: Dispatch<SetStateAction<Pairs | null>>
    players: Player[]
    setPlayers: Dispatch<SetStateAction<Player[]>>
    currentPlayer: Player
    setCurrentPlayer: Dispatch<SetStateAction<Player>>
    couplesFound: string[]
    setCouplesFound: Dispatch<SetStateAction<string[]>>
    selectedCouple1: Couple | null
    setSelectedCouple1: Dispatch<SetStateAction<Couple | null>>
    selectedCouple2: Couple | null
    setSelectedCouple2: Dispatch<SetStateAction<Couple | null>>
}

const AppContext = createContext({} as AppContextProps)

export function AppProvider({ children }: LayoutProps) {

    const [isWin, setIsWin] = useState(false)
    const [
        numberOfPlayers, setNumberOfPlayers
    ] = useState<NumberOfPlayers | null>(null)
    const [pairs, setPairs] = useState<Pairs | null>(null)
    const [players, setPlayers] = useState<Player[]>(playerObjects)
    const [currentPlayer, setCurrentPlayer] = useState<Player>(playerObjects[0])
    const [couplesFound, setCouplesFound] = useState<string[]>([])
    const [selectedCouple1, setSelectedCouple1] = useState<Couple | null>(null)
    const [selectedCouple2, setSelectedCouple2] = useState<Couple | null>(null)

    const value: AppContextProps = {
        reseteAllValues,
        isWin, setIsWin,
        numberOfPlayers, setNumberOfPlayers,
        pairs, setPairs,
        players, setPlayers,
        currentPlayer, setCurrentPlayer,
        couplesFound, setCouplesFound,
        selectedCouple1, setSelectedCouple1,
        selectedCouple2, setSelectedCouple2,
    }

    function reseteAllValues(sortedPlayers: Player[]) {

        setCurrentPlayer(playerObjects[0])
        setIsWin(false)
        setCouplesFound([])
        setSelectedCouple1(null)
        setSelectedCouple2(null)

        const players = sortedPlayers.map(player => {

            player.score = 0

            return player
        })

        setPlayers(players)
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)