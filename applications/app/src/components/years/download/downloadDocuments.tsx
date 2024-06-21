import { ButtonOutline } from "@coulba/design/buttons"
import { IconChevronLeft } from "@tabler/icons-react"
import { CurrentYearContext } from "../../../contexts/currentYear/currentYear.context"
import { router } from "../../../routes/router"
import { Section } from "../../layouts/section/section"
import { DownloadFEC } from "./downloadFEC"
import { DownloadSheet } from "./downloadSheet"
import { DownloadStatement } from "./downloadStatement"


type DownloadDocuments = {
    currentYear: CurrentYearContext
}

export function DownloadDocuments(props: DownloadDocuments) {
    return (
        <Section.Root>
            <Section.Item className="justify-start">
                <ButtonOutline
                    onClick={() => router.navigate({ to: "/configuration/exercices" })}
                    icon={<IconChevronLeft />}
                />
            </Section.Item>
            <Section.Item className="grid grid-cols-3">
                <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                    <div className="flex flex-col justify-start items-start gap-1">
                        <h2 className="text-2xl">Télécharger les Fichier des Écritures Comptables (FEC)</h2>
                        <p className="text-neutral/50">Au format .xml</p>
                    </div>
                    <div className="w-full flex justify-end items-center">
                        <DownloadFEC currentYear={props.currentYear} />
                    </div>
                </div>
                <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                    <div className="flex flex-col justify-start items-start gap-1">
                        <h2 className="text-2xl">Télécharger le bilan</h2>
                        <p className="text-neutral/50">Au format .pdf</p>
                    </div>
                    <div className="w-full flex justify-end items-center">
                        <DownloadSheet currentYear={props.currentYear} />
                    </div>
                </div>
                <div className="w-full h-full border border-neutral/10 rounded-md p-3 flex flex-col justify-between items-start gap-3">
                    <div className="flex flex-col justify-start items-start gap-1">
                        <h2 className="text-2xl">Télécharger le compte de résultat</h2>
                        <p className="text-neutral/50">Au format .pdf</p>
                    </div>
                    <div className="w-full flex justify-end items-center">
                        <DownloadStatement currentYear={props.currentYear} />
                    </div>
                </div>
            </Section.Item>
        </Section.Root>
    )
}
