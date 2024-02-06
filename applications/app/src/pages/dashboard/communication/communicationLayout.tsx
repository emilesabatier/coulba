'use client'

import { Outlet } from "@tanstack/react-router"
import { AnnouncementIcon } from "../../../components/announcement/announcement.icon"
import { ContactIcon } from "../../../components/contact/contact.icon"
import { ConversationIcon } from "../../../components/conversation/conversation.icon"
import { Main } from "../../../components/layouts/main/main"
import { Page } from "../../../components/layouts/page/page"


export function CommunicationLayout() {
    return (
        <Page.Root id="communication">
            <Page.Header />
            <Page.Main>
                <Page.Navigation />
                <Page.Content>
                    <Main.Root>
                        <Main.Navigation
                            routes={[
                                {
                                    title: "Messagerie",
                                    icon: <ConversationIcon />,
                                    path: "/communication/messagerie"
                                },
                                {
                                    title: "Annuaire",
                                    icon: <ContactIcon />,
                                    path: "/communication/contacts"
                                },
                                {
                                    title: "Annonces",
                                    icon: <AnnouncementIcon />,
                                    path: "/communication/annonces"
                                },
                            ]}
                        />
                        <Main.Content
                            children={<Outlet />}
                        />
                    </Main.Root>
                </Page.Content>
            </Page.Main>
        </Page.Root>
    )
}
