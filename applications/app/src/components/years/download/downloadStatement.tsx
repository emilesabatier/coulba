import { ButtonPlain } from "@coulba/design/buttons"
import { toast } from "@coulba/design/overlays"
import { IconDownload } from "@tabler/icons-react"
import { CurrentYearContext } from "../../../contexts/currentYear/currentYear.context"
import { downloadStatement } from "../../../services/api/auth/statements/downloadStatement"


type DownloadStatement = {
    currentYear: CurrentYearContext
}

export function DownloadStatement(props: DownloadStatement) {
    if (!props.currentYear.data) return null
    return (
        <ButtonPlain
            text="Télécharger"
            icon={<IconDownload />}
            onClick={async () => {
                if (!props.currentYear.data) return null

                const response = await downloadStatement()
                if (!response) return

                const blob = new Blob([response], { type: "application/pdf" })
                const url = window.URL.createObjectURL(blob)

                const tempLink = document.createElement("a")
                tempLink.href = url
                tempLink.setAttribute(
                    "download",
                    `compte-de-resultat_${new Date(props.currentYear.data.endingOn).getFullYear()}.pdf`
                )

                tempLink.click()
                window.URL.revokeObjectURL(url)

                toast({ title: "Le téléchargement a démarré", variant: "success" })
            }}
        />
    )
}
