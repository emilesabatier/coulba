'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { useState } from "react"
import { CollaboratorsTable } from "../../../../components/collaborator/collaboratorsTable/collaboratorsTable"
import { CreateOneCollaborator } from "../../../../components/collaborator/createOneCollaborator/createOneCollaborator"
import { Content } from "../../../../components/layouts/content/content"
import { SeasonCombobox } from "../../../../components/season/seasonCombobox"
import { useCurrentSeason } from "../../../../hooks/data/useCurrentSeason"


export function CollaboratorsPage() {
    const currentSeason = useCurrentSeason()
    const [idSeason, setIdSeason] = useState<string | undefined>(currentSeason.data?.id)

    return (
        <Content.Root>
            <div className="w-full flex justify-between items-center gap-4">
                <CreateOneCollaborator>
                    <ButtonPlain
                        text="Ajouter un collaborateur"
                        icon={<IconPlus />}
                    />
                </CreateOneCollaborator>
                <SeasonCombobox
                    value={idSeason}
                    onChange={(value) => setIdSeason(value ?? undefined)}
                    className="w-fit"
                />
            </div>
            <CollaboratorsTable
                filter={(collaborator) => !!collaborator.collaboratorSeasons.find(x => !idSeason ? x.idSeason === currentSeason.data?.id : x.idSeason === idSeason)}
            />
        </Content.Root>
    )
}
