import { createRoute } from "@tanstack/react-router"
import { recordsLayout } from "./records.layout"
import { Main } from "../../../components/layouts/main"
import { RecordsTable } from "../../../components/records/recordsTable"


export const recordsRoute = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <RecordsTable />
        </Main>
    )
})
