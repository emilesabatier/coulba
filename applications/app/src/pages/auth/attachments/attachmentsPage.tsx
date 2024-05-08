import { AttachmentsTable } from "../../../components/attachments/attachmentsTable"
import { Main } from "../../../components/layouts/main/main"


export function AttachmentsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Stockage de fichiers"
                description="Vous trouverez sur cette page la liste des pièces justificatives et autres fichiers."
            />
            <Main.Content>
                <AttachmentsTable />
            </Main.Content>
        </Main.Root>
    )
}
