'use client'

import { useState } from "react"
import { ExportAdherentsData } from "../../../components/adherent/exportAdherentsData/exportAdherentsData"
import { Content } from "../../../components/layouts/content/content"
import { DataBlock } from "../../../components/layouts/dataBlock/dataBlock"
import { SeasonCombobox } from "../../../components/season/seasonCombobox"


export function AdherentsExportPage() {
    const [idSeason, setIdSeason] = useState<string | null | undefined>()

    return (
        <Content.Root>
            <DataBlock.Root key="adherent-export">
                <DataBlock.Header title="Informations liées à l'exportation des données" />
                <DataBlock.Content>
                    <div className="flex flex-col justify-start items-start">
                        <span>Le fichier est téléchargé au format <b>.csv</b>.</span>
                        <span>Le caractère <kbd className="inline-block px-1 bg-background border border-neutral/10 rounded-xs">;</kbd> est utilisé pour séparer les données.</span>
                        <span>Vous pouvez ouvrir le fichier avec n'importe quel tableur ou éditeur de texte.</span>
                    </div>
                    <div className="flex flex-col justify-start items-start gap-2">
                        <span className="italic text-neutral/50">Veuillez sélectionner une saison pour exporter les adhérents.</span>
                        <div className="max-w-full flex justify-start items-center gap-1 overflow-hidden">
                            <div className="w-fit">
                                <SeasonCombobox
                                    value={idSeason}
                                    onChange={(season) => setIdSeason(season)}
                                />
                            </div>
                            <ExportAdherentsData
                                filter={(adherent) => !!adherent.adherentSeasons.find(x => x.idSeason === idSeason)}
                            />
                        </div>
                    </div>
                </DataBlock.Content>
            </DataBlock.Root>
        </Content.Root>
    )
}
