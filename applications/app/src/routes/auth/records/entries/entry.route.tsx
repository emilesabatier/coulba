import { createRoute } from "@tanstack/react-router"
import { entriesLayout } from "./entries.layout"
import { EntryPage } from "../../../../pages/auth/records/entries/entryPage"


export const entryRoute = createRoute({
    getParentRoute: () => entriesLayout,
    path: '/$idEntry',
    component: () => <EntryPage />
})
