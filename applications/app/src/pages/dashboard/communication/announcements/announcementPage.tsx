'use client'

import { ButtonGhost, ButtonMenu, ButtonPlain } from "@monassosportive/design/buttons"
import { PopoverMenu } from "@monassosportive/design/overlays"
import { IconDots, IconEdit, IconSend, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { AnnouncementContent } from "../../../../components/announcement/announcementContent"
import { DeleteOneAnnouncement } from "../../../../components/announcement/deleteOneAnnouncement/deleteOneAnnouncement"
import { FormatAnnouncementState } from "../../../../components/announcement/formatAnnouncement/formatAnnouncementState"
import { SendAnnouncement } from "../../../../components/announcement/sendAnnouncement/sendAnnouncement"
import { UpdateOneAnnouncement } from "../../../../components/announcement/updateOneAnnouncement/updateOneAnnouncement"
import { BackButton } from "../../../../components/layouts/backButton"
import { Content } from "../../../../components/layouts/content/content"
import { useAnnouncement } from "../../../../hooks/data/useAnnouncement"
import { announcementRoute } from "../../../../routes/dashboard/communication/announcements/announcement.route"


export function AnnouncementPage() {
    const { idAnnouncement } = useParams({ from: announcementRoute.id })
    const announcement = useAnnouncement(idAnnouncement)

    if (!announcement.data) return null
    return (
        <Content.Root>
            <Content.Header className="justify-between flex-wrap gap-y-2">
                <div className="overflow-hidden flex justify-start items-center gap-1">
                    <BackButton to="/communication/annonces" params={{}} />
                    <FormatAnnouncementState state={announcement.data.state} />
                    <h2 className="overflow-hidden text-ellipsis whitespace-nowrap text-lg md:text-3xl leading-none text-neutral">{announcement.data.label}</h2>
                </div>
                <div className="overflow-hidden flex justify-end items-center gap-1">
                    <SendAnnouncement announcement={announcement.data}>
                        <ButtonPlain
                            text="Envoyer l'annonce"
                            icon={<IconSend />}
                        />
                    </SendAnnouncement>
                    <PopoverMenu
                        align="end"
                        triggerElement={<ButtonGhost icon={<IconDots />} />}
                    >
                        <UpdateOneAnnouncement announcement={announcement.data}>
                            <ButtonMenu
                                text="Modifier"
                                icon={<IconEdit />}
                            />
                        </UpdateOneAnnouncement>
                        <DeleteOneAnnouncement announcement={announcement.data}>
                            <ButtonMenu
                                text="Supprimer"
                                icon={<IconTrash />}
                                color="error"
                            />
                        </DeleteOneAnnouncement>
                    </PopoverMenu>
                </div>
            </Content.Header>
            <AnnouncementContent announcement={announcement.data} />
        </Content.Root>
    )
}
