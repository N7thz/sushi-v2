"use client"

import { LayoutProps, Pairs, NumberOfPlayers } from "@/@types"
import { playerObjects, PlayersProps } from "@/utils/players"
import { getCookie } from "cookies-next"
import { createContext, useContext, useState } from "react"

interface AppContextProps {
    numberOfPlayers: string
    setNumberOfPlayers: (numberOfPlayers: NumberOfPlayers) => void
    pairs: string
    setPairs: (pairs: Pairs) => void
    players: PlayersProps[]
    setPlayers: (players: PlayersProps[]) => void
}

const AppContext = createContext({} as AppContextProps)

export function AppProvider({ children }: LayoutProps) {

    const playersToken = getCookie("players") ?? "one"
    const pairsToken = getCookie("pairs") ?? "8"

    const [numberOfPlayers, setNumberOfPlayers] = useState(playersToken)
    const [pairs, setPairs] = useState(pairsToken)
    const [
        players, setPlayers
    ] = useState<PlayersProps[]>(playerObjects)

    const value: AppContextProps = {
        numberOfPlayers, setNumberOfPlayers,
        pairs, setPairs,
        players, setPlayers,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)