import { createRoute } from "@tanstack/react-router"
import { SignUpPage } from "../../pages/signUp/signUpPage"
import { rootLayout } from "../root.layout"


export const signUpRoute = createRoute({
    getParentRoute: () => rootLayout,
    path: '/inscription',
    component: () => <SignUpPage />
})
