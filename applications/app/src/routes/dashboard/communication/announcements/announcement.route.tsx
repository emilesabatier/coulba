import { createRoute } from "@tanstack/react-router"
import { AnnouncementPage } from "../../../../pages/dashboard/communication/announcements/announcementPage"
import { announcementsLayout } from "./announcements.layout"


export const announcementRoute = createRoute({
    getParentRoute: () => announcementsLayout,
    path: '/$idAnnouncement',
    component: () => <AnnouncementPage />
})
