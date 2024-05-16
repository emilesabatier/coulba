import { Main } from "../../../components/layouts/main/main"
import { CloseYear } from "../../../components/years/closeYear"
import { DownloadDocuments } from "../../../components/years/downloadDocuments"


export function ClosingPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Clôture"
                description="Vous pouvez sur cette page clôturer l'exercice fiscal en cours et générer la version finale des documents comptables."
            >
            </Main.Header>
            <Main.Content>
                <CloseYear />
                <DownloadDocuments />
            </Main.Content>
        </Main.Root>
    )
}
