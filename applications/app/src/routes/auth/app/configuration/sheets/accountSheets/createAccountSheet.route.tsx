import { createRoute } from "@tanstack/react-router"
import { CreateAccountSheetForm } from "../../../../../../components/accountSheets/create/createAccountSheet.form"
import { Main } from "../../../../../../components/layouts/main"
import { accountSheetsLayout } from "./accountSheets.layout"


export const createAccountSheetRoute = createRoute({
    getParentRoute: () => accountSheetsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: undefined
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateAccountSheetForm />
        </Main>
    )
})
