import { createRoute } from "@tanstack/react-router"
import { signInLayout } from "./signIn.layout"
import { Logo } from "@coulba/design/layouts"
import { ResetPasswordForm } from "../../components/signIn/resetPassword.form"


export const resetPasswordRoute = createRoute({
    getParentRoute: () => signInLayout,
    beforeLoad: () => ({
        title: "Identifiants oubliés",
        description: undefined
    }),
    path: '/identifiants',
    component: () => {
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
})
