import { createRoute } from "@tanstack/react-router"
import { ReadSheetPage } from "../../../../../pages/auth/configuration/sheets/readSheetPage"
import { readSheetLayout } from "./readSheet.layout"


export const readSheetRoute = createRoute({
    getParentRoute: () => readSheetLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <ReadSheetPage />
})
