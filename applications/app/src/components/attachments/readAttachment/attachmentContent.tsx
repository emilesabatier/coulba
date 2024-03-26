import { ButtonOutline } from "@coulba/design/buttons"
import { FormatDateTime, FormatFileSize, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { useFile } from "../../../hooks/useFile"
import { readAttachmentRoute } from "../../../routes/auth/attachments/readAttachment.route"
import { router } from "../../../routes/router"
import { attachmentOptions } from "../../../services/api/auth/attachments/attachmentsOptions"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"


export function AttachmentContent() {
    const { idAttachment } = useParams({ from: readAttachmentRoute.id })
    const attachment = useQuery(attachmentOptions(idAttachment))
    const [urlFile, isFileLoading] = useFile(attachment.data?.storageKey)

    if (attachment.isLoading || isFileLoading) return <CircularLoader />
    if (attachment.isError) return <ErrorMessage message={attachment.error.message} />
    if (!attachment.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
            <ButtonOutline
                onClick={() => router.navigate({ to: "/fichiers" })}
                icon={<IconChevronLeft />}
                text="Retour"
            />
            <DataBlock.Root>
                <DataBlock.Item label="Libellé">
                    <FormatText text={attachment.data.label} />
                </DataBlock.Item>
                <DataBlock.Item label="Référence">
                    <FormatText text={attachment.data.reference} />
                </DataBlock.Item>
                <DataBlock.Item label="Type">
                    <FormatText text={attachment.data.type.split("/").at(1)} />
                </DataBlock.Item>
                <DataBlock.Item label="Size">
                    <FormatFileSize size={attachment.data.size} />
                </DataBlock.Item>
                <DataBlock.Item label="Ajout le">
                    <FormatDateTime isoDate={attachment.data.createdOn} />
                </DataBlock.Item>
                <DataBlock.Item label="Dernière modification le">
                    <FormatDateTime isoDate={attachment.data.lastUpdatedOn} />
                </DataBlock.Item>
            </DataBlock.Root>
            <iframe
                title={attachment.data.reference}
                className="w-full min-h-[768px] h-full rounded-sm border border-neutral/20"
                src={urlFile}
            />
        </div>
    )
}
