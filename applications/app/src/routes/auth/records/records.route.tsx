import { createRoute } from "@tanstack/react-router"
import { Main } from "../../../components/layouts/main"
import { Section } from "../../../components/layouts/section/section"
import { RecordsTable } from "../../../components/records/recordsTable"
import { recordsLayout } from "./records.layout"


export const recordsRoute = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: undefined,
        description: undefined
    }),
    path: '/',
    component: () => (
        <Main>
            <Section.Root>
                <Section.Item>
                    <RecordsTable />
                </Section.Item>
            </Section.Root>
        </Main>
    )
})
