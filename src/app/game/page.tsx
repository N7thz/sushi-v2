import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Board } from "@/components/board"
import Link from "next/link"

export default function Game() {
    return (
        <div className="page">
            <Card className="size-5/6 flex flex-col justify-between bg-background z-10 drop-shadow-2xl">
                <CardHeader>
                    <CardTitle>
                        Sushi Memory Game
                    </CardTitle>
                </CardHeader>
                <Board />
                <CardFooter className="justify-end">
                    <Link
                        href={"/options"}
                        className="w-1/3"
                    >
                        <Button className="w-full">
                            Back
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}