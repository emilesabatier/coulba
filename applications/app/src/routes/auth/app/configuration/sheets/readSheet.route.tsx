import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../../../components/layouts/main"
import { SheetContent } from "../../../../../components/sheets/read/sheetContent"
import { readSheetLayout } from "./readSheet.layout"


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
