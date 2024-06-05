import { Outlet, createRoute } from "@tanstack/react-router"
import { accountSheetsLayout } from "./accountSheets.layout"


export const readAccountSheetLayout = createRoute({
    getParentRoute: () => accountSheetsLayout,
    beforeLoad: ({ params }) => ({
        title: params.idAccountSheet,
        description: undefined
    }),
    path: '/$idAccountSheet',
    component: () => <Outlet />
})
