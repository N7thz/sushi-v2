export type Player = {
    name: string,
    avatarUrl: string
    score: number
}

export const players = ["one", "two", "four"]

export const playerObjects: Player[] = [
    {
        name: "player-01",
        avatarUrl: "/icon-01.jpg",
        score: 0
    },
    {
        name: "player-02",
        avatarUrl: "/icon-02.jpg",
        score: 0
    },
    {
        name: "player-03",
        avatarUrl: "/icon-03.jpg",
        score: 0
    },
    {
        name: "player-04",
        avatarUrl: "/icon-04.jpg",
        score: 0
    }
]