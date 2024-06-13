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
            <Section.Item className="flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-start items-start gap-1">
                    <Section.Title title="Télécharger les Fichier des Écritures Comptables (FEC)" />
                    <p>Au format .xml</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                    <DownloadFEC currentYear={props.currentYear} />
                </div>
            </Section.Item>
            <Section.Item className="flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-start items-start gap-1">
                    <Section.Title title="Télécharger le bilan" />
                    <p>Au format .pdf</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                    <DownloadSheet currentYear={props.currentYear} />
                </div>
            </Section.Item>
            <Section.Item className="flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-start items-start gap-1">
                    <Section.Title title="Télécharger le compte de résultat" />
                    <p>Au format .pdf</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                    <DownloadStatement currentYear={props.currentYear} />
                </div>
            </Section.Item>
        </Section.Root>
    )
}
