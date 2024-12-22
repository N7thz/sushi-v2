"use client"

import { LayoutProps, Pairs, Players } from "@/@types"
import { getCookie } from "cookies-next"
import { createContext, useContext, useState } from "react"

interface AppContextProps {
    players: Players | undefined
    setPlayers: (players: Players) => void
    pairs: Pairs | undefined
    setPairs: (pairs: Pairs) => void
}

const AppContext = createContext({} as AppContextProps)

export function AppProvider({ children }: LayoutProps) {

    const playersToken = getCookie("players") as Players | undefined
    const pairsToken = getCookie("pairs") as Pairs | undefined

    const [players, setPlayers] = useState<Players | undefined>(playersToken)
    const [pairs, setPairs] = useState<Pairs | undefined>(pairsToken)

    const value: AppContextProps = {
        players, setPlayers,
        pairs, setPairs,
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export const useApp = () => useContext(AppContext)