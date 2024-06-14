import { createRoute } from "@tanstack/react-router"
import { ResetPasswordForm } from "../../../components/signIn/resetPassword.form"
import { signInLayout } from "./signIn.layout"


export const resetPasswordRoute = createRoute({
    getParentRoute: () => signInLayout,
    beforeLoad: () => ({
        title: "Mot de passe oublié",
        description: "Veuillez renseigner votre email de connexion"
    }),
    path: '/identifiants',
    component: () => {
        return (
            <ResetPasswordForm />
        )
    }
})
