import { CreateAttachmentForm } from "../../../components/attachments/createAttachment/createAttachment.form"
import { Main } from "../../../components/layouts/main/main"


export function AddAttachmentPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Ajouter un fichier"
                description="Remplir le formulaire et valider pour ajouter un nouveau fichier."
            />
            <Main.Content>
                <CreateAttachmentForm />
            </Main.Content>
        </Main.Root>
    )
}
