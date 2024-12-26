"use client"

import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Bolt } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export const ConfigSheet = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <Sheet
            open={isOpen}
            onOpenChange={setIsOpen}
        >
            <SheetTrigger asChild>
                <Button
                    variant="outline"
                    size={"icon"}
                >
                    <Bolt />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Options</SheetTitle>
                </SheetHeader>
                <SheetFooter className="w-full mt-6">
                    <SheetClose asChild>
                        <Button className="w-full">
                            Close
                        </Button>
                    </SheetClose>
                    <Link
                        href={"/options"}
                        className="w-full"
                        onClick={() => setIsOpen(false)}
                    >
                        <Button className="w-full">
                            Back
                        </Button>
                    </Link>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}