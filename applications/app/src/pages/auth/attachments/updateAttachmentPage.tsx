import { UpdateAttachmentForm } from "../../../components/attachments/update/updateAttachment.form"
import { Main } from "../../../components/layouts/main/main"


export function UpdateAttachmentPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Modifier un fichier"
                description="Remplir le formulaire et valider pour modifier les données du fichier."
            />
            <UpdateAttachmentForm />
        </Main.Root>
    )
}
