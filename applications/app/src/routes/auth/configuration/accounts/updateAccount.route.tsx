import { createRoute } from "@tanstack/react-router"
import { readAccountLayout } from "./readAccount.layout"
import { UpdateAccountForm } from "../../../../components/accounts/update/updateAccount.form"
import { Main } from "../../../../components/layouts/main"


export const updateAccountRoute = createRoute({
    getParentRoute: () => readAccountLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier les données du compte."
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateAccountForm />
        </Main>
    )
})
