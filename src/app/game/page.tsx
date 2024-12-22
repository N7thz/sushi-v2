import { 
    Card, CardHeader, CardTitle, CardContent, CardFooter 
} from "@/components/ui/card"

export default function Game() {
    return (
        <div className="page">
            <Card className="size-5/6 flex flex-col justify-between">
                <CardHeader>
                    <CardTitle>
                        Sushi Memory Game
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                
                </CardContent>
                <CardFooter className="flex flex-col gap-4">
                    
                </CardFooter>
            </Card>
        </div>
    )
}