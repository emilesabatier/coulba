'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { useState } from "react"
import { Content } from "../../../../components/layouts/content/content"
import { CreateOneLesson } from "../../../../components/lesson/createOneLesson/createOneLesson"
import { LessonsTable } from "../../../../components/lesson/lessonsTable/lessonsTable"
import { SeasonCombobox } from "../../../../components/season/seasonCombobox"
import { useCurrentSeason } from "../../../../hooks/data/useCurrentSeason"


export function LessonsPage() {
    const currentSeason = useCurrentSeason()
    const [idSeason, setIdSeason] = useState<string | undefined>(currentSeason.data?.id)

    return (
        <Content.Root>
            <div className="w-full flex justify-between items-center gap-4">
                <CreateOneLesson>
                    <ButtonPlain
                        text="Ajouter un cours"
                        icon={<IconPlus />}
                    />
                </CreateOneLesson>
                <SeasonCombobox
                    value={idSeason}
                    onChange={(value) => setIdSeason(value ?? undefined)}
                    className="w-fit"
                />
            </div>
            <LessonsTable
                filter={(lesson) => !!lesson.lessonSeasons.find(x => !idSeason ? x.idSeason === currentSeason.data?.id : x.idSeason === idSeason)}
            />
        </Content.Root>
    )
}
