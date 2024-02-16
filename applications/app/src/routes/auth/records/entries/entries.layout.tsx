import { CircularLoader } from "@coulba/design/layouts"
import { createRoute } from "@tanstack/react-router"
import { EntriesLayout } from "../../../../pages/auth/records/entries/entriesLayout"
import { recordsLayout } from "../records.layout"


export const entriesLayout = createRoute({
    getParentRoute: () => recordsLayout,
    beforeLoad: () => ({
        title: "Journal"
    }),
    path: '/journal',
    pendingComponent: () => <CircularLoader />,
    component: () => <EntriesLayout />
})
