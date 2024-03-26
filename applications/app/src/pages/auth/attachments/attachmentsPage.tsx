import { ButtonPlain } from "@coulba/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { AttachmentsTable } from "../../../components/attachments/attachmentsTable"
import { CreateAttachment } from "../../../components/attachments/createAttachment/createAttachment"
import { Main } from "../../../components/layouts/main/main"


export function AttachmentsPage() {
    return (
        <Main.Root>
            <Main.Header
                title="Stockage de fichiers"
                description="Vous trouverez sur cette page la liste des pièces justificatives et autres fichiers."
            />
            <Main.Content>
                <div className="flex flex-col justify-start items-stretch gap-2">
                    <CreateAttachment>
                        <ButtonPlain
                            icon={<IconPlus />}
                            text="Ajouter un fichier"
                        />
                    </CreateAttachment>
                    <AttachmentsTable />
                </div>
            </Main.Content>
        </Main.Root>
    )
}
