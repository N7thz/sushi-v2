"use client"

import { LayoutProps, Pairs, NumberOfPlayers } from "@/@types"
import { playerObjects, Player } from "@/utils/players"
import { getCookie } from "cookies-next"
import { createContext, Dispatch, SetStateAction, useContext, useState } from "react"

interface AppContextProps {
    isWin: boolean
    setIsWin: (isWin: boolean) => void
    numberOfPlayers: string
    setNumberOfPlayers: (numberOfPlayers: NumberOfPlayers) => void
    pairs: string
    setPairs: (pairs: Pairs) => void
    players: Player[]
    setPlayers: (players: Player[]) => void
    currentPlayer: Player
    setCurrentPlayer: Dispatch<SetStateAction<Player>>
}

const AppContext = createContext({} as AppContextProps)

export function AppProvider({ children }: LayoutProps) {

    const playersToken = getCookie("players") ?? "one"
    const pairsToken = getCookie("pairs") ?? "8"

    const [isWin, setIsWin] = useState(false)
    const [numberOfPlayers, setNumberOfPlayers] = useState(playersToken)
    const [pairs, setPairs] = useState(pairsToken)
    const [players, setPlayers] = useState<Player[]>(playerObjects)
    const [currentPlayer, setCurrentPlayer] = useState<Player>(playerObjects[0])

    const value: AppContextProps = {
        isWin, setIsWin,
        numberOfPlayers, setNumberOfPlayers,
        pairs, setPairs,
        players, setPlayers,
        currentPlayer, setCurrentPlayer
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)