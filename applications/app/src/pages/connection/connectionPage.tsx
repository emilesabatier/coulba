import { Button } from "@monassosportive/design/buttons"
import { Logo } from "@monassosportive/design/layouts"
import { useEffect } from "react"
import { ConnectionForm } from "../../components/connection/connectionForm"
import { ResetPassword } from "../../components/connection/resetPassword"


export function ConnectionPage() {

    useEffect(() => { document.title = "Connexion | MonAssoSportive" }, [])

    return (
        <div id="signin" className="w-full h-full flex flex-col justify-center items-center gap-2 bg-background">
            {/* <Pattern className="w-full h-full absolute fill-white/5" /> */}
            <div className="w-fit md:max-w-md flex flex-col justify-center items-stretch">
                <div className="relative z-[1] h-fit rounded-md p-4 md:p-8 flex flex-col justify-center items-stretch gap-4 md:gap-8 bg-white shadow-outer">
                    <div className="flex flex-col justify-start items-center">
                        <Logo className="fill-primary stroke-primary" />
                        <h1 className="text-primary font-bold">MonAssoSportive</h1>
                    </div>
                    <ConnectionForm />
                </div>
                <div className="w-full flex justify-between items-center gap-4 p-2">
                    <Button onClick={() => window.location.replace("https://monassosportive.fr")}>
                        <span className="text-neutral text-sm underline hover:no-underline">Site internet</span>
                    </Button>
                    <ResetPassword />
                </div>
            </div>
        </div>
    )
}
