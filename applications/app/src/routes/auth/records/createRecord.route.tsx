import { createRoute } from "@tanstack/react-router"
import { recordsLayout } from "./records.layout"
import { Main } from "../../../components/layouts/main"
import { CreateRecordForm } from "../../../components/records/create/createRecord.form"


export const createRecordRoute = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: "Ajouter",
        description: undefined
    }),
    path: '/ajouter',
    component: () => (
        <Main>
            <CreateRecordForm />
        </Main>
    )
})
