import { Outlet, createRoute } from "@tanstack/react-router"
import { readSheetLayout } from "../readSheet.layout"


export const accountSheetsLayout = createRoute({
    getParentRoute: () => readSheetLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/comptes',
    component: () => <Outlet />
})
