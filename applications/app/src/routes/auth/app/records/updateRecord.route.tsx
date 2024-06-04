import { createRoute } from "@tanstack/react-router"
import { UpdateRecordPage } from "../../../../pages/auth/records/updateRecordPage"
import { readRecordLayout } from "./readRecord.layout"


export const updateRecordRoute = createRoute({
    getParentRoute: () => readRecordLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: undefined
    }),
    path: '/modifier',
    component: () => <UpdateRecordPage />
})
