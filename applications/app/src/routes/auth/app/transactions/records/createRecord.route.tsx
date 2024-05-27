import { createRoute } from "@tanstack/react-router"
import { recordsLayout } from "./records.layout"
import { CreateRecordPage } from "../../../../../pages/auth/transactions/records/createRecordPage"


export const createRecordRoute = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: "Remplir le formulaire et valider pour ajouter un nouvel enregistrement comptable."
    }),
    path: '/ajouter',
    component: () => <CreateRecordPage />
})
