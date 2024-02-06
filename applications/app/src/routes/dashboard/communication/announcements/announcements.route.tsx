import { createRoute } from "@tanstack/react-router"
import { AnnouncementsPage } from "../../../../pages/dashboard/communication/announcements/announcementsPage"
import { announcementsLayout } from "./announcements.layout"


export const announcementsRoute = createRoute({
    getParentRoute: () => announcementsLayout,
    path: '/',
    component: () => <AnnouncementsPage />
})
