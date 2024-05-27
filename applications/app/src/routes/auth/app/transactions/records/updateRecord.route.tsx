import { createRoute } from "@tanstack/react-router"
import { readRecordLayout } from "./readRecord.layout"
import { UpdateRecordPage } from "../../../../../pages/auth/transactions/records/updateRecordPage"


export const updateRecordRoute = createRoute({
    getParentRoute: () => readRecordLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: "Remplir le formulaire et valider pour modifier l'enregistrement comptable."
    }),
    path: '/modifier',
    component: () => <UpdateRecordPage />
})
