import { createRoute } from "@tanstack/react-router"
import { readSheetLayout } from "./readSheet.layout"
import { Main } from "../../../../components/layouts/main"
import { SheetContent } from "../../../../components/sheets/read/sheetContent"


export const readSheetRoute = createRoute({
    getParentRoute: () => readSheetLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <SheetContent />
        </Main>
    )
})
