import { Button } from "@coulba/design/buttons"
import { IconAbacus } from "@tabler/icons-react"
import { useEffect } from "react"
import { ConnectionForm } from "../../components/connection/connectionForm"


export function ConnectionPage() {

    useEffect(() => { document.title = "Connexion | Coulba" }, [])

    return (
        <div id="signin" className="w-full h-full flex flex-col justify-center items-center gap-2 bg-background">
            {/* <Pattern className="w-full h-full absolute fill-white/5" /> */}
            <div className="w-full bg-white border-y border-neutral/25 flex justify-center items-center">
                <div className="w-fit md:max-w-md flex flex-col justify-center items-stretch p-4 md:p-8">
                    <div className="relative z-[1] h-fit flex flex-col justify-center items-stretch gap-4 md:gap-8">
                        <div className="flex flex-col justify-start items-center">
                            <IconAbacus size={48} />
                            <h1 className="text-neutral font-bold">Coulba</h1>
                        </div>
                        <ConnectionForm />
                    </div>
                    <div className="w-full flex justify-between items-center gap-4 p-2">
                        <Button onClick={() => window.location.replace("https://coulba.fr")}>
                            <span className="text-neutral/50 text-sm underline hover:no-underline">Site internet</span>
                        </Button>
                        {/* <ResetPassword /> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
