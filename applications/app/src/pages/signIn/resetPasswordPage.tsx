import { Logo } from "@coulba/design/layouts"
import { useEffect } from "react"
import { ResetPasswordForm } from "../../components/signIn/resetPassword.form"


export function ResetPasswordPage() {

    useEffect(() => { document.title = "Mot de passe oublié | Coulba" }, [])

    return (
        <div id="resetPassword" className="w-full h-full grid">
            <div className="bg-white flex justify-center items-center border-r border-neutral/20">
                <div className="min-w-[300px] w-full max-w-[768px] flex justify-center items-center">
                    <div className="w-full flex flex-col justify-start items-stretch gap-8">
                        <Logo />
                        <ResetPasswordForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
