import { createRoute } from "@tanstack/react-router"
import { ContactsPage } from "../../../../pages/dashboard/communication/contacts/contactsPage"
import { contactsLayout } from "./contacts.layout"


export const contactsRoute = createRoute({
    getParentRoute: () => contactsLayout,
    path: '/',
    component: () => <ContactsPage />
})
