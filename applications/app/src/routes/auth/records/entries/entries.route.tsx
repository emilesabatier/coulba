import { createRoute } from "@tanstack/react-router"
import { entriesLayout } from "./entries.layout"
import { EntriesPage } from "../../../../pages/auth/records/entries/entriesPage"


export const entriesRoute = createRoute({
    getParentRoute: () => entriesLayout,
    path: '/',
    component: () => <EntriesPage />
})
