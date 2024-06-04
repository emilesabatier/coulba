import { ButtonPlain } from "@coulba/design/buttons"
import { CircularLoader } from "@coulba/design/layouts"
import { IconDownload } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useCompany } from "../../contexts/company/useCompany"
import { useCurrentYear } from "../../contexts/currentYear/useCurrentYear"
import { rowsOptions } from "../../services/api/auth/rows/rowsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Section } from "../layouts/section/section"


export function DownloadDocuments() {
    const rows = useQuery(rowsOptions)
    const company = useCompany()
    const currentYear = useCurrentYear()

    function exportFEC() {
        if (!currentYear.data) return

        const closingDate = new Date(currentYear.data?.endingOn)

        const xml = document.implementation.createDocument("", "", null)

        const header = xml.createProcessingInstruction("xml", 'version="1.0" encoding="utf-8"')
        const comptabilite = xml.createElement("comptabilite")
        const exercice = xml.createElement("exercice")

        const DateCloture = xml.createElement("DateCloture")
        DateCloture.innerHTML = "20241001"

        // var personElem1 = doc.createElement("person");
        // personElem1.setAttribute("first-name", "eric");
        // personElem1.setAttribute("middle-initial", "h");
        // personElem1.setAttribute("last-name", "jung");

        exercice.appendChild(DateCloture)
        comptabilite.appendChild(exercice)
        xml.appendChild(header)
        xml.appendChild(comptabilite)

        const xmlString = new XMLSerializer().serializeToString(xml)
        const encodedXML = new Blob([xmlString], { type: 'text/plain' })

        const link = document.createElement("a")
        link.setAttribute("href", window.URL.createObjectURL(encodedXML))
        link.setAttribute("download", `${company.data?.siren ?? "SIREN"}FEC${closingDate.getFullYear()}${closingDate.getMonth() + 1}${closingDate.getDate()}.xml`)
        document.body.appendChild(link)

        link.click()
    }

    if (rows.isLoading || company.isLoading || currentYear.isLoading) return <CircularLoader className="m-3" />
    if (rows.isError) return <ErrorMessage message={rows.error.message} />
    if (!rows.data || !company.data || !currentYear.data) return null
    return (
        <Section.Root>
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
