import { createRoute } from "@tanstack/react-router"
import { readAccountSheetLayout } from "./readAccountSheet.layout"
import { UpdateAccountSheetForm } from "../../../../../components/accountSheets/update/updateAccountSheet.form"
import { Main } from "../../../../../components/layouts/main"


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
