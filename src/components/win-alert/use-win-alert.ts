"use client"

import { useApp } from "@/providers/app-provider"
import { Player } from "@/utils/players"

export function useWinAlert() {

    const { isWin, players, numberOfPlayers } = useApp()

    const sortedPlayers = orderByScore()

    function getNumberOfPlayers() {

        if (numberOfPlayers === "one") {
            return players.slice(0, 1)
        }

        if (numberOfPlayers === "two") {
            return players.slice(0, 2)
        }

        return players
    }

    function orderByScore() {

        const players = getNumberOfPlayers()

        const sortedPlayers = players.sort((a, b) => b.score - a.score)

        return sortedPlayers
    }

    const winnerPlayer = sortedPlayers[0]

    function hasSameScore(players: Player[]) {

        const scoreSet = new Set<number>()

        for (const player of players) {

            if (scoreSet.has(player.score)) {
                return true
            }

            scoreSet.add(player.score)
        }

        return false
    }

    const sameScore = hasSameScore(sortedPlayers)

    return { sortedPlayers, isWin, sameScore, winnerPlayer }
}