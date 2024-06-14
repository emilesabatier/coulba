import { createRoute } from "@tanstack/react-router"
import { authLayout } from "./auth.layout"
import { Main } from "../../components/layouts/main"
import { ActivationForm } from "../../components/profile/activation.form"


export const activationRoute = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Activation",
        description: undefined
    }),
    path: '/activation',
    component: () => (
        <Main>
            <ActivationForm />
        </Main>
    )
})
