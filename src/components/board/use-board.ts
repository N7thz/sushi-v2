"use client"

import { useApp } from "@/providers/app-provider"
import { pairsIcons } from "@/utils/pairs"
import { useEffect, useState } from "react"
import { v4 as randomUUID } from 'uuid'
import { useBeforeunload } from "react-beforeunload"
import { Player, playerObjects } from "@/utils/players"
import { Couple } from "@/@types"

export function useBoard() {

    const [couples, setCouples] = useState<Couple[]>([])

    const {
        pairs,
        currentPlayer,
        numberOfPlayers,
        players,
        couplesFound,
        selectedCouple1,
        selectedCouple2,
        setPlayers,
        setIsWin,
        setCurrentPlayer,
        setCouplesFound,
        setSelectedCouple1,
        setSelectedCouple2
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

                addPointsToPlayer()

                if (couplesFound.length + 1 === couples.length / 2) {
                    setIsWin(true)
                }
            } else {

                if (numberOfPlayers !== "one") {
                    setTimeout(changeCurrentPlayer, 1000)
                }
            }

            setTimeout(() => {
                setSelectedCouple1(null)
                setSelectedCouple2(null)
            }, 1000)
        },
        [selectedCouple1, selectedCouple2]
    )

    function addPointsToPlayer() {

        const currentPlayerIndex = getCurrentPlayer(players)

        setPlayers(oldValue => {

            let currentPlayer = oldValue[currentPlayerIndex]

            currentPlayer.score = currentPlayer.score + 0.5

            console.log(currentPlayer)

            oldValue[currentPlayerIndex] = currentPlayer

            return oldValue
        })
    }

    function changeCurrentPlayer() {

        const currentPlayerIndex = getCurrentPlayer(playerObjects)

        console.log(currentPlayerIndex)

        const lastIndex = getLastIndex()

        console.log(lastIndex)

        if (currentPlayerIndex === lastIndex) {
            setCurrentPlayer(players[0])

            console.log(players[0])
        } else {
            setCurrentPlayer(players[currentPlayerIndex + 1])

            console.log(players[currentPlayerIndex + 1])
        }
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

    function getLastIndex() {

        if (numberOfPlayers === "two") {
            return 1
        }

        if (numberOfPlayers === "four") {
            return 3
        }

        return 0
    }   

    function getCurrentPlayer(players: Player[]) {

        const currentPlayerIndex = players.findIndex(
            player => player.name === currentPlayer.name
        )

        return currentPlayerIndex
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