'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { AnnouncementsList } from "../../../../components/announcement/accouncementsList"
import { CreateOneAnnouncement } from "../../../../components/announcement/createOneAnnouncement/createOneAnnouncement"
import { Content } from "../../../../components/layouts/content/content"


export function AnnouncementsPage() {
    return (
        <Content.Root>
            <CreateOneAnnouncement>
                <ButtonPlain
                    text="Créer une annonce"
                    icon={<IconPlus />}
                    className="shrink-0"
                />
            </CreateOneAnnouncement>
            <AnnouncementsList />
        </Content.Root>
    )
}
