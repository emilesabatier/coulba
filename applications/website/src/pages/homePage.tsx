

import { useEffect } from "react"
import { ContactForm } from "../components/home/contactForm"
import { IconsFrame } from "../components/home/iconsFrame"


export function HomePage() {

    useEffect(() => { document.title = "MonAssoSportive" }, [])

    return (
        <div className="relative w-full h-full flex flex-col justify-between items-center gap-8 p-4 overflow-hidden">
            <div className="w-full h-full flex flex-col justify-center items-start gap-4 p-4 max-w-md">
                <div className="inline-flex flex-col justify-start items-start gap-2">
                    <h1 className="text-5xl">
                        Toute votre association sportive,
                        <br />
                        <span className="text-neutral text-5xl">en un seul endroit !</span>
                    </h1>
                    <h2 className="text-lg text-neutral/50">Faites le pas et simplifiez votre gestion associative ! Ne laissez pas le décalage entre les attentes grandissantes de vos adhérents et partenaires et notre monde hyperconnecté vous ralentir.</h2>
                </div>
                <div className="w-full flex flex-col justify-start items-start gap-2">
                    <ContactForm />
                    {/* <ButtonGhost
                        text="En savoir plus"
                        icon={<IconZoomIn />}
                        onClick={() => navigate({ to: "/fonctionnalites" })}
                        className="min-w-fit"
                    /> */}
                </div>
            </div>
            <IconsFrame />
        </div>
    )
}
