import { createRoute } from "@tanstack/react-router"
import { accountsLayout } from "./accounts.layout"
import { CreateAccountForm } from "../../../../components/accounts/create/createAccount.form"
import { Main } from "../../../../components/layouts/main"


export const createAccountRoute = createRoute({
    getParentRoute: () => accountsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouveau compte."
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateAccountForm />
        </Main>
    )
})
