import { createRoute } from "@tanstack/react-router"
import { ReadRecordPage } from "../../../../pages/auth/records/readRecordPage"
import { readRecordLayout } from "./readRecord.layout"


export const readRecordRoute = createRoute({
    getParentRoute: () => readRecordLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => <ReadRecordPage />
})
