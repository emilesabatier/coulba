'use client'

import { ContactsTable } from "../../../../components/contact/contactsTable/contactsTable"
import { Content } from "../../../../components/layouts/content/content"


export function ContactsPage() {
    return (
        <Content.Root>
            <ContactsTable />
        </Content.Root>
    )
}
