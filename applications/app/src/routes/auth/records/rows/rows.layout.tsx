import { Outlet, createRoute } from "@tanstack/react-router"
import { readRecordLayout } from "../readRecord.layout"


export const rowsLayout = createRoute({
    getParentRoute: () => readRecordLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Vous trouverez sur cette page la liste des lignes comptables provisoires, avant leur validation et ajout définitif au journal."
    }),
    path: '/lignes',
    component: () => <Outlet />
})
