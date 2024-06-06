import { CircularLoader } from "@coulba/design/layouts"
import { createRoute, redirect } from "@tanstack/react-router"
import { SignUpForm } from "../../../components/signUp/signUp.form"
import { unauthLayout } from "../unauth.layout"


export const signUpRoute = createRoute({
    getParentRoute: () => unauthLayout,
    beforeLoad: async ({ context }) => {
        if (context.session && context.session.isSignedIn) {
            throw redirect({
                to: '/'
            })
        }
        return ({
            title: "Inscription",
            description: "Veuillez entrer les informations nécessaires à l'inscription"
        })
    },
    path: '/inscription',
    pendingComponent: () => <CircularLoader />,
    component: () => {
        return (
            <SignUpForm />
        )
    }
})
