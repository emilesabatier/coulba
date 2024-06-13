import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconDownload } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { CurrentYearContext } from "../../contexts/currentYear/currentYear.context"
import { useOrganization } from "../../contexts/organization/useOrganization"
import { router } from "../../routes/router"
import { accountsOptions } from "../../services/api/auth/accounts/accountsOptions"
import { attachmentsOptions } from "../../services/api/auth/attachments/attachmentsOptions"
import { journalsOptions } from "../../services/api/auth/journals/journalsOptions"
import { recordsOptions } from "../../services/api/auth/records/recordsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"


type DownloadDocuments = {
    currentYear: CurrentYearContext
}

export function DownloadDocuments(props: DownloadDocuments) {
    const records = useQuery(recordsOptions)
    const journals = useQuery(journalsOptions)
    const accounts = useQuery(accountsOptions)
    const attachments = useQuery(attachmentsOptions)
    const organization = useOrganization()

    const recordsData = (records.data ?? [])
        .filter((record) => record.isValidated && !!record.validatedOn)
        .map((record, index) => ({
            ...record,
            index: index + 1
        }))

    const journalsData = [
        ...(journals.data ?? []),
        {
            id: null,
            idOrganization: "",
            code: "NR",
            label: "Non renseigné",
            lastUpdatedBy: null,
            lastUpdatedOn: "",
            createdOn: "",
            createdBy: null
        }
    ]

    function exportFEC() {
        if (!props.currentYear.data || !journals.data || !organization.data || !records.data || !attachments.data || !accounts.data) return

        const xml = document.implementation.createDocument("", "", null)

        const headerNode = xml.createProcessingInstruction("xml", 'version="1.0" encoding="utf-8"')
        const comptabiliteNode = xml.createElement("comptabilite")
        const exerciceNode = xml.createElement("exercice")

        const DateClotureNode = xml.createElement("DateCloture")
        DateClotureNode.innerHTML = new Date(props.currentYear.data.endingOn).toISOString()
        exerciceNode.appendChild(DateClotureNode)

        journalsData.forEach((journal) => {
            const journalNode = xml.createElement("journal")

            const JournalCodeNode = xml.createElement("JournalCode")
            JournalCodeNode.innerHTML = journal.code
            journalNode.appendChild(JournalCodeNode)

            const JournalLibNode = xml.createElement("JournalLib")
            JournalLibNode.innerHTML = journal.label
            journalNode.appendChild(JournalLibNode)

            recordsData.filter((record) => record.idJournal === journal.id).forEach((record) => {
                const rows = record.rows.filter((row) => row.isValidated)
                if (rows.length === 0) return

                const attachment = attachments.data?.find((attachment) => attachment.id === record.idAttachment)
                if (!attachment) return
                if (!record.validatedOn) return

                const ecritureNode = xml.createElement("ecriture")

                const EcritureNumNode = xml.createElement("EcritureNum")
                EcritureNumNode.innerHTML = record.index.toString()
                ecritureNode.appendChild(EcritureNumNode)

                const EcritureDateNode = xml.createElement("EcritureDate")
                EcritureDateNode.innerHTML = new Date(record.date).toISOString()
                ecritureNode.appendChild(EcritureDateNode)

                const EcritureLibNode = xml.createElement("EcritureLib")
                EcritureLibNode.innerHTML = record.label
                ecritureNode.appendChild(EcritureLibNode)

                const PieceRefNode = xml.createElement("PieceRef")
                PieceRefNode.innerHTML = attachment.reference
                ecritureNode.appendChild(PieceRefNode)

                const PieceDateNode = xml.createElement("PieceDate")
                PieceDateNode.innerHTML = new Date(attachment.date).toISOString()
                ecritureNode.appendChild(PieceDateNode)

                // const EcritureLetNode = xml.createElement("EcritureLet")
                // EcritureLetNode.innerHTML = ""
                // ecritureNode.appendChild(EcritureLetNode)

                // const DateLetNode = xml.createElement("DateLet")
                // DateLetNode.innerHTML = ""
                // ecritureNode.appendChild(DateLetNode)

                const ValidDateNode = xml.createElement("ValidDate")
                ValidDateNode.innerHTML = new Date(record.validatedOn).toISOString()
                ecritureNode.appendChild(ValidDateNode)

                rows.forEach((row) => {
                    const account = accounts.data?.find((account) => account.id === row.idAccount)
                    if (!account) return
                    if (!["1", "2", "3", "4", "5", "6", "7"].includes(account.number.toString().at(0) ?? "")) return

                    const ligneNode = xml.createElement("ligne")

                    const CompteNumNode = xml.createElement("CompteNum")
                    CompteNumNode.innerHTML = account.number.toString()
                    ligneNode.appendChild(CompteNumNode)

                    const CompteLibNode = xml.createElement("CompteLib")
                    CompteLibNode.innerHTML = account.label
                    ligneNode.appendChild(CompteLibNode)

                    if (Number(row.debit) > 0) {
                        const DebitNode = xml.createElement("Debit")
                        DebitNode.innerHTML = row.debit.toString()
                        ligneNode.appendChild(DebitNode)
                    }
                    else {
                        const CreditNode = xml.createElement("Credit")
                        CreditNode.innerHTML = row.credit.toString()
                        ligneNode.appendChild(CreditNode)
                    }

                    ecritureNode.appendChild(ligneNode)
                })

                journalNode.appendChild(ecritureNode)
            })

            exerciceNode.appendChild(journalNode)
        })

        comptabiliteNode.appendChild(exerciceNode)
        xml.appendChild(headerNode)
        xml.appendChild(comptabiliteNode)

        const xmlString = new XMLSerializer().serializeToString(xml)
        const encodedXML = new Blob([xmlString], { type: 'text/plain' })

        const link = document.createElement("a")
        link.setAttribute("href", window.URL.createObjectURL(encodedXML))
        const closingDate = new Date(props.currentYear.data.endingOn)
        link.setAttribute("download", `${organization.data.siren ?? "SIREN"}FEC${`${closingDate.getFullYear()}${closingDate.getMonth() + 1}${closingDate.getDate()}`}.xml`)
        document.body.appendChild(link)

        link.click()
    }

    if (records.isLoading || organization.isLoading || props.currentYear.isLoading) return <CircularLoader className="m-3" />
    if (records.isError) return <ErrorMessage message={records.error.message} />
    if (!records.data || !organization.data || !props.currentYear.data) return null
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
                    <Section.Title title="Télécharger les documents comptables" />
                    <p className="text-neutral/75">Cela permet de générer les documents nécessaires à l'administration fiscale.</p>
                </div>
                <div className="flex flex-col justify-start items-start gap-1">
                    <p>
                        Vous pouvez télécharger le Fichier des Écritures Comptables (FEC) en cliquant sur le bouton ci-contre. Le fichier est dans le format
                    </p>
                    <ButtonPlain
                        text="Télécharger le Fichier des Écritures Comptables (FEC)"
                        icon={<IconDownload />}
                        onClick={() => exportFEC()}
                    />
                </div>
            </Section.Item>
        </Section.Root>
    )
}
