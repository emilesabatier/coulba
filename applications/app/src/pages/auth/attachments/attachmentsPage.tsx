import { ButtonOutline } from "@coulba/design/buttons"
import { AttachmentsList } from "../../../components/attachments/attachmentsList"
import { CreateAttachment } from "../../../components/attachments/createAttachment/createAttachment"
import { Main } from "../../../components/layouts/main/main"


export function AttachmentsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Stockage de fichiers"
                description="Vous trouverez sur cette page la liste des pièces justificatives et autres fichiers."
            >
                <CreateAttachment>
                    <ButtonOutline
                        text="Ajouter un fichier"
                    />
                </CreateAttachment>
            </Main.Header>
            <Main.Content>
                <AttachmentsList />
            </Main.Content>
        </Main.Root>
    )
}
