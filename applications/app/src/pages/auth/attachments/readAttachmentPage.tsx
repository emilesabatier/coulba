import { AttachmentContent } from "../../../components/attachments/read/attachmentContent"
import { Main } from "../../../components/layouts/main/main"


export function ReadAttachmentPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Consulter un fichier"
                description="Consulter les données du fichier."
            />
            <AttachmentContent />
        </Main.Root>
    )
}
