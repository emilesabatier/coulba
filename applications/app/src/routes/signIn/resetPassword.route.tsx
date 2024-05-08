import { createRoute } from "@tanstack/react-router"
import { ResetPasswordPage } from "../../pages/signIn/resetPasswordPage"
import { signInLayout } from "./signIn.layout"


export const resetPasswordRoute = createRoute({
    getParentRoute: () => signInLayout,
    path: '/identifiants',
    component: () => <ResetPasswordPage />
})
