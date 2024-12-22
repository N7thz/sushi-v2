import { Button } from "@/components/ui/button"
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Home() {
  return (
    <div className="page">
      <Card className="w-1/4 flex flex-col justify-between">
        <CardHeader>
          <CardTitle>
            Sushi Memory Game
          </CardTitle>
        </CardHeader>
        <CardFooter>
          <Button className="w-full">
            <Link href="/options">
              Play
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
