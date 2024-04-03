import { useEffect } from "react"
import { ActivationForm } from "../../components/profile/activation.form"


export function ActivationPage() {

    useEffect(() => { document.title = "Activation | Coulba" }, [])

    return (
        <div className="w-full h-full flex justify-center items-center">
            <ActivationForm />
        </div>
    )
}
