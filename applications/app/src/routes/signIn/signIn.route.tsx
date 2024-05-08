import { createRoute } from "@tanstack/react-router"
import { SignInPage } from "../../pages/signIn/signInPage"
import { signInLayout } from "./signIn.layout"


export const signInRoute = createRoute({
    getParentRoute: () => signInLayout,
    path: '/',
    component: () => <SignInPage />
})
