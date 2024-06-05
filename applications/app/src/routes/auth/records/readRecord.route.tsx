import { createRoute } from "@tanstack/react-router"
import { readRecordLayout } from "./readRecord.layout"
import { Main } from "../../../components/layouts/main"
import { RecordContent } from "../../../components/records/read/recordContent"


export const readRecordRoute = createRoute({
    getParentRoute: () => readRecordLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <RecordContent />
        </Main>
    )
})
