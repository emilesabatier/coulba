'use client'

import { useParams } from "@tanstack/react-router"
import { ContactIcon } from "../../../../components/contact/contact.icon"
import { contactFormat } from "../../../../components/contact/formatContact/contact.format"
import { BackButton } from "../../../../components/layouts/backButton"
import { Content } from "../../../../components/layouts/content/content"
import { DataBlock } from "../../../../components/layouts/dataBlock/dataBlock"
import { contactRoute } from "../../../../routes/dashboard/communication/contacts/contact.route"
import { contactData } from "../../../../components/contact/contact.data"
import { useContact } from "../../../../hooks/data/useContact"



export function ContactPage() {
    const { idContact } = useParams({ from: contactRoute.id })
    const contact = useContact(idContact)

    if (!contact.data) return null

    const dataGroups = contactData(contact.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/communication/contacts" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <ContactIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{contactFormat(contact.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">

                </div>
            </Content.Header>
            <DataBlock.Grid id="contact">
                {
                    dataGroups.map((group) => (
                        <DataBlock.Root key={group.key}>
                            <DataBlock.Header title={group.title} />
                            <DataBlock.Content>
                                {
                                    group.items.map((item) => (
                                        <DataBlock.Item
                                            key={item.key}
                                            label={item.label}
                                            description={item.description}
                                            children={item.value}
                                        />
                                    ))
                                }
                            </DataBlock.Content>
                        </DataBlock.Root>
                    ))
                }
            </DataBlock.Grid>
        </Content.Root>
    )
}
