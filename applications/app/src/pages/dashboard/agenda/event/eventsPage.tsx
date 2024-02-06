'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { useState } from "react"
import { CreateOneEvent } from "../../../../components/event/createOneEvent/createOneEvent"
import { EventsTable } from "../../../../components/event/eventsTable/eventsTable"
import { Content } from "../../../../components/layouts/content/content"
import { SeasonCombobox } from "../../../../components/season/seasonCombobox"
import { useCurrentSeason } from "../../../../hooks/data/useCurrentSeason"


export function EventsPage() {
    const currentSeason = useCurrentSeason()
    const [idSeason, setIdSeason] = useState<string | undefined>(currentSeason.data?.id)

    return (
        <Content.Root>
            <div className="w-full flex justify-between items-center gap-4">
                <CreateOneEvent>
                    <ButtonPlain
                        text="Ajouter un évènement"
                        icon={<IconPlus />}
                    />
                </CreateOneEvent>
                <SeasonCombobox
                    value={idSeason}
                    onChange={(value) => setIdSeason(value ?? undefined)}
                    className="w-fit"
                />
            </div>
            <EventsTable
                filter={(event) => !!event.eventSeasons.find(x => !idSeason ? x.idSeason === currentSeason.data?.id : x.idSeason === idSeason)}
            />
        </Content.Root>
    )
}
