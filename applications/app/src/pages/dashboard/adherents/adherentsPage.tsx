'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { useState } from "react"
import { AdherentsTable } from "../../../components/adherent/adherentsTable/adherentsTable"
import { CreateOneAdherent } from "../../../components/adherent/createOneAdherent/createOneAdherent"
import { Content } from "../../../components/layouts/content/content"
import { SeasonCombobox } from "../../../components/season/seasonCombobox"
import { useCurrentSeason } from "../../../hooks/data/useCurrentSeason"


export function AdherentsPage() {
    const currentSeason = useCurrentSeason()
    const [idSeason, setIdSeason] = useState<string | undefined>(currentSeason.data?.id)

    return (
        <Content.Root>
            <div className="w-full flex justify-between items-center gap-2 md:gap-4">
                <CreateOneAdherent>
                    <ButtonPlain
                        text="Ajouter un adhérent"
                        icon={<IconPlus />}
                    />
                </CreateOneAdherent>
                <SeasonCombobox
                    value={idSeason}
                    onChange={(value) => setIdSeason(value ?? undefined)}
                    className="w-fit"
                />
            </div>
            <AdherentsTable
                filter={(adherent) => !!adherent.adherentSeasons.find(x => !idSeason ? x.idSeason === currentSeason.data?.id : x.idSeason === idSeason)}
            />
        </Content.Root>
    )
}
