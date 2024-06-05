import { createRoute } from "@tanstack/react-router"
import { accountsLayout } from "./accounts.layout"
import { AccountsList } from "../../../../components/accounts/accountsList"
import { Main } from "../../../../components/layouts/main"


export const accountsRoute = createRoute({
    getParentRoute: () => accountsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous retrouvez sur cette page le plan des comptes de l'entreprise que vous pouvez modifier selon votre besoin. Veuillez à bien savoir ce que vous faites avant de supprimer des données."
    }),
    path: '/',
    component: () => (
        <Main>
            <AccountsList />
        </Main>
    )
})
