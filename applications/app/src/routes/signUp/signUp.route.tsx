import { createRoute, redirect } from "@tanstack/react-router"
import { SignUpPage } from "../../pages/signUp/signUpPage"
import { rootLayout } from "../root.layout"
import { CircularLoader } from "@coulba/design/layouts"


export const signUpRoute = createRoute({
    getParentRoute: () => rootLayout,
    path: '/inscription',
    pendingComponent: () => <CircularLoader />,
    beforeLoad: async ({ context }) => {
        if (context.session && context.session.isSignedIn) {
            throw redirect({
                to: '/'
            })
        }
    },
    component: () => <SignUpPage />
})
