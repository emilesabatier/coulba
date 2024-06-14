import { createRoute } from "@tanstack/react-router"
import { readAccountSheetLayout } from "./readAccountSheet.layout"
import { AccountSheetContent } from "../../../../../components/accountSheets/read/accountSheetContent"
import { Main } from "../../../../../components/layouts/main"


export const readAccountSheetRoute = createRoute({
    getParentRoute: () => readAccountSheetLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <AccountSheetContent />
        </Main>
    )
})
