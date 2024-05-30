import { createRoute } from "@tanstack/react-router"
import { UpdateAccountSheetForm } from "../../../../../../components/accountSheets/update/updateAccountSheet.form"
import { Main } from "../../../../../../components/layouts/main"
import { readAccountSheetLayout } from "./readAccountSheet.layout"


export const updateAccountSheetRoute = createRoute({
    getParentRoute: () => readAccountSheetLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: undefined
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateAccountSheetForm />
        </Main>
    )
})
