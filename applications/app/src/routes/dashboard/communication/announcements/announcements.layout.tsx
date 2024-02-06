import { Outlet, createRoute } from "@tanstack/react-router"
import { AnnouncementIcon } from "../../../../components/announcement/announcement.icon"
import { communicationLayout } from "../communication.layout"


export const announcementsLayout = createRoute({
    getParentRoute: () => communicationLayout,
    beforeLoad: () => ({
        label: "Annonces",
        icon: <AnnouncementIcon />,
        subNavigationParent: "/communication/annonces"
    }),
    path: '/annonces',
    component: () => <Outlet />
})
