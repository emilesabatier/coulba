import { Logo } from "@coulba/design/layouts"
import { useEffect } from "react"
import { SignUpForm } from "../../components/signUp/signUp.form"


export function SignUpPage() {

    useEffect(() => { document.title = "Inscription" }, [])

    return (
        <div id="signup" className="w-full h-full grid">
            <div className="bg-white flex justify-center items-center border-r border-neutral/20">
                <div className="min-w-[300px] w-full max-w-[50%] flex justify-center items-center">
                    <div className="w-full flex flex-col justify-start items-start gap-8 p-4">
                        <Logo />
                        <SignUpForm />
                    </div>
                </div>
            </div>
        </div>
    )
}
