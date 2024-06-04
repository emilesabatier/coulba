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

        const csvArray = [[]]

        const encodedCsv = "data:text/csv;charset=utf-8," + encodeURIComponent(csvArray.map(e => e.join(";")).join("\n"))

        const link = document.createElement("a")
        link.setAttribute("href", encodedCsv)
        link.setAttribute("download", `${company.data?.siren ?? "SIREN"}FEC${closingDate.getFullYear()}${closingDate.getMonth() + 1}${closingDate.getDate()}.txt`)
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
                <div className="flex justify-start items-center gap-1">
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
