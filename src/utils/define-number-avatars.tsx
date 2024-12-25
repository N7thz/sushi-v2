import { playerObjects as players } from "./players"

export function definesTheNumberOfAvatars(player: string) {

    if (player === "one") {
        return players.slice(0, 1)
    } else if (player === "two") {
        return players.slice(0, 2)
    }

    return players
}