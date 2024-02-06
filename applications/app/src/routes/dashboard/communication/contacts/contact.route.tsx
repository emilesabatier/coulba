import { createRoute } from "@tanstack/react-router"
import { ContactPage } from "../../../../pages/dashboard/communication/contacts/contactPage"
import { contactsLayout } from "./contacts.layout"


export const contactRoute = createRoute({
    getParentRoute: () => contactsLayout,
    path: '/$idContact',
    component: () => <ContactPage />
})
