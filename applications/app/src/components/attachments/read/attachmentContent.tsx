import { ButtonOutline } from "@coulba/design/buttons"
import { FormatDateTime, FormatFileSize, FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconChevronLeft, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { readAttachmentRoute } from "../../../routes/auth/attachments/readAttachment.route"
import { router } from "../../../routes/router"
import { attachmentOptions } from "../../../services/api/auth/attachments/attachmentsOptions"
import { useFile } from "../../../services/file/useFile"
import { DataBlock } from "../../layouts/dataBlock/dataBlock"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Section } from "../../layouts/section/section"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteAttachment } from "../delete/deleteAttachment"
import { UpdateAttachment } from "../update/updateAttachment"


export function AttachmentContent() {
    const { idAttachment } = useParams({ from: readAttachmentRoute.id })
    const attachment = useQuery(attachmentOptions(idAttachment))
    const [urlFile, isFileLoading] = useFile(attachment.data?.storageKey)

    if (attachment.isLoading || isFileLoading) return <CircularLoader />
    if (attachment.isError) return <ErrorMessage message={attachment.error.message} />
    if (!attachment.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
            <div className="flex justify-between items-center gap-1">
                <ButtonOutline
                    onClick={() => router.navigate({ to: "/fichiers" })}
                    icon={<IconChevronLeft />}
                    text="Retour"
                />
                <div className="flex justify-end items-center gap-1">
                    <UpdateAttachment attachment={attachment.data}>
                        <ButtonOutline
                            icon={<IconPencil />}
                        />
                    </UpdateAttachment>
                    <DeleteAttachment attachment={attachment.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteAttachment>
                </div>
            </div>
            <div className="grid grid-cols-[auto_auto] gap-4">
                <Section.Root>
                    <Section.Header title="Informations" />
                    <Section.Content>
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
                        </DataBlock.Root>
                    </Section.Content>
                </Section.Root>
                <Section.Root>
                    <Section.Header title="Métadonnées" />
                    <Section.Content>
                        <DataBlock.Root>
                            <DataBlock.Item label="Ajouté le">
                                <FormatDateTime isoDate={attachment.data.createdOn} />
                            </DataBlock.Item>
                            <DataBlock.Item label="Ajouté par">
                                {!attachment.data.createdBy ? <FormatNull /> : <FormatUserWithFetch idUser={attachment.data.createdBy} />}
                            </DataBlock.Item>
                            <DataBlock.Item label="Modifié le">
                                <FormatDateTime isoDate={attachment.data.lastUpdatedOn} />
                            </DataBlock.Item>
                            <DataBlock.Item label="Modifié par">
                                {!attachment.data.lastUpdatedBy ? <FormatNull /> : <FormatUserWithFetch idUser={attachment.data.lastUpdatedBy} />}
                            </DataBlock.Item>
                        </DataBlock.Root>
                    </Section.Content>
                </Section.Root>
            </div>
            <Section.Root>
                <Section.Header title="Aperçu du fichier" />
                <Section.Content>
                    <iframe
                        title={attachment.data.reference}
                        className="w-full min-h-[768px] h-full rounded-md border border-neutral/20"
                        src={urlFile}
                    />
                </Section.Content>
            </Section.Root>
        </div>
    )
}
