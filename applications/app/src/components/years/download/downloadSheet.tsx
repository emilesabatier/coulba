import { ButtonPlain } from "@coulba/design/buttons"
import { toast } from "@coulba/design/overlays"
import { IconDownload } from "@tabler/icons-react"
import { CurrentYearContext } from "../../../contexts/currentYear/currentYear.context"
import { downloadSheet } from "../../../services/api/auth/sheets/downloadSheet"


type DownloadSheet = {
    currentYear: CurrentYearContext
}

export function DownloadSheet(props: DownloadSheet) {
    if (!props.currentYear.data) return null
    return (
        <ButtonPlain
            text="Télécharger"
            icon={<IconDownload />}
            onClick={async () => {
                if (!props.currentYear.data) return null

                const response = await downloadSheet()
                if (!response) return

                const blob = new Blob([response], { type: "application/pdf" })
                const url = window.URL.createObjectURL(blob)

                const tempLink = document.createElement("a")
                tempLink.href = url
                tempLink.setAttribute(
                    "download",
                    `bilan_${new Date(props.currentYear.data.endingOn).getFullYear()}.pdf`
                )

                tempLink.click()
                window.URL.revokeObjectURL(url)

                toast({ title: "Le téléchargement a démarré", variant: "success" })
            }}
        />
    )
}
