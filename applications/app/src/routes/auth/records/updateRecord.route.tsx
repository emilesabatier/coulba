import { createRoute } from "@tanstack/react-router"
import { readRecordLayout } from "./readRecord.layout"
import { Main } from "../../../components/layouts/main"
import { UpdateRecordForm } from "../../../components/records/update/updateRecord.form"


export const updateRecordRoute = createRoute({
    getParentRoute: () => readRecordLayout,
    beforeLoad: () => ({
        title: "Modifier",
        description: undefined
    }),
    path: '/modifier',
    component: () => (
        <Main>
            <UpdateRecordForm />
        </Main>
    )
})
