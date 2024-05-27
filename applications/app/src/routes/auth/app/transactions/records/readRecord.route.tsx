import { createRoute } from "@tanstack/react-router"
import { readRecordLayout } from "./readRecord.layout"
import { ReadRecordPage } from "../../../../../pages/auth/transactions/records/readRecordPage"


export const readRecordRoute = createRoute({
    getParentRoute: () => readRecordLayout,
    beforeLoad: () => ({
        title: undefined,
        description: "Consulter les données de l'enregistrement."
    }),
    path: '/',
    component: () => <ReadRecordPage />
})
