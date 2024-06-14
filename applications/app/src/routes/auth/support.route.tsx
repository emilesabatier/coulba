import { createRoute } from "@tanstack/react-router"
import { authLayout } from "./auth.layout"
import { Main } from "../../components/layouts/main"
import { SendSupportMessageForm } from "../../components/support/sendSupportMessage.form"


export const supportRoute = createRoute({
    getParentRoute: () => authLayout,
    beforeLoad: () => ({
        title: "Support",
        description: "Vous trouverez sur cette page un formulaire afin de nous contacter rapidement."
    }),
    path: '/support',
    component: () => (
        <Main>
            <SendSupportMessageForm />
        </Main>
    )
})
