import { Main } from "../../../components/layouts/main/main"
import { SheetContent } from "../../../components/reports/sheet/sheetContent"

export function SheetPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Bilan"
                description="Le bilan comptable permet d'avoir une vue globale sur la santé de l'entreprise. Il présente ce que l'entreprise possède (actif) et ce qu'elle doit (passif)."
            >
                {/* <ButtonOutline
                    text="Télécharger en .pdf"
                    icon={<IconDownload />}
                    onClick={() => {

                    }}
                /> */}
            </Main.Header>
            <Main.Content>
                <SheetContent />
            </Main.Content>
        </Main.Root>
    )
}
