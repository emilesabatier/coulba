import { createRoute } from "@tanstack/react-router"
import { CreateRecordPage } from "../../../../pages/auth/records/createRecordPage"
import { recordsLayout } from "./records.layout"


export const createRecordRoute = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: undefined
    }),
    path: '/ajouter',
    component: () => <CreateRecordPage />
})
