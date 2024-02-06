import { Outlet, createRoute } from "@tanstack/react-router"
import { ContactIcon } from "../../../../components/contact/contact.icon"
import { communicationLayout } from "../communication.layout"


export const contactsLayout = createRoute({
    getParentRoute: () => communicationLayout,
    beforeLoad: () => ({
        label: "Annuaire",
        icon: <ContactIcon />,
        subNavigationParent: "/communication/contacts"
    }),
    path: '/contacts',
    component: () => <Outlet />
})
