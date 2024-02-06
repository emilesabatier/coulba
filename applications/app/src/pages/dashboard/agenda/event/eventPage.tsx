'use client'

import { ButtonOutline } from "@monassosportive/design/buttons"
import { IconEdit, IconTrash } from "@tabler/icons-react"
import { useParams } from "@tanstack/react-router"
import { DeleteOneEvent } from "../../../../components/event/deleteOneEvent/deleteOneEvent"
import { eventData } from "../../../../components/event/event.data"
import { EventIcon } from "../../../../components/event/event.icon"
import { eventFormat } from "../../../../components/event/formatEvent/event.format"
import { UpdateOneEvent } from "../../../../components/event/updateOneEvent/updateOneEvent"
import { BackButton } from "../../../../components/layouts/backButton"
import { Content } from "../../../../components/layouts/content/content"
import { DataBlock } from "../../../../components/layouts/dataBlock/dataBlock"
import { useEvent } from "../../../../hooks/data/useEvent"
import { eventRoute } from "../../../../routes/dashboard/agenda/events/event.route"


export function EventPage() {
    const { idEvent } = useParams({ from: eventRoute.id })
    const event = useEvent(idEvent)

    if (!event.data) return null

    const dataGroups = eventData(event.data)
    return (
        <Content.Root>
            <Content.Header className="justify-between">
                <div className="flex justify-start items-center gap-1 md:gap-2 ">
                    <BackButton to="/agenda/evenements" params={{}} />
                    <div className="flex justify-start items-center gap-1 md:gap-2 ">
                        <EventIcon />
                        <h2 className="text-2xl whitespace-nowrap overflow-hidden text-ellipsis">{eventFormat(event.data)}</h2>
                    </div>
                </div>
                <div className="w-fit flex justify-end items-center gap-1 md:gap-2 ">
                    <UpdateOneEvent event={event.data}>
                        <ButtonOutline
                            icon={<IconEdit />}
                        />
                    </UpdateOneEvent>
                    <DeleteOneEvent event={event.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteOneEvent>
                </div>
            </Content.Header>
            <DataBlock.Grid id="event">
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
