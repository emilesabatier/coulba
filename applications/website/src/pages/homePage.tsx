

import { useEffect } from "react"
import { Features } from "../components/home/features"
import { HeroHeader } from "../components/home/heroHeader"


export function HomePage() {

    useEffect(() => { document.title = "Coulba, le logiciel de comptabilité pour ceux qui veulent la comprendre" }, [])

    return (
        <div className="w-full max-w-[1280px] h-full flex flex-col justify-start items-stretch py-16">
            <HeroHeader />
            <Features />
        </div>
    )
}
