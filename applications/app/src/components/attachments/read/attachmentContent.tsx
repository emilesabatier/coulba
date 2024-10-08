import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormatDate, FormatDateTime, FormatFileSize, FormatNull, FormatText } from "@coulba/design/formats"
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
import { Title } from "../../layouts/title"
import { FormatUserWithFetch } from "../../users/format/formatUserWithFetch"
import { DeleteAttachment } from "../delete/deleteAttachment"
import { UpdateAttachment } from "../update/updateAttachment"


export function AttachmentContent() {
    const { idAttachment } = useParams({ from: readAttachmentRoute.id })
    const attachment = useQuery(attachmentOptions(idAttachment))
    const [urlFile, isFileLoading] = useFile(attachment.data?.storageKey)

    if (attachment.isLoading || isFileLoading) return <CircularLoader className="m-3" />
    if (attachment.isError) return <ErrorMessage message={attachment.error.message} />
    if (!attachment.data) return null
    return (
        <Section.Root>
            <Section.Item>
                <div className="flex justify-start items-center gap-1.5">
                    <ButtonOutline
                        onClick={() => router.navigate({ to: "/stockage" })}
                        icon={<IconChevronLeft />}
                    />
                    <UpdateAttachment attachment={attachment.data}>
                        <ButtonPlain
                            icon={<IconPencil />}
                            text="Modifier"
                        />
                    </UpdateAttachment>
                </div>
                <div className="ml-auto flex justify-end items-center gap-1.5">
                    <DeleteAttachment attachment={attachment.data}>
                        <ButtonOutline
                            icon={<IconTrash />}
                            color="error"
                        />
                    </DeleteAttachment>
                </div>
            </Section.Item>
            <Section.Item className="flex-col">
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Informations" />
                    </DataBlock.Header>
                    <DataBlock.Content>
                        <DataBlock.Item label="Référence">
                            <FormatText text={attachment.data.reference} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Libellé">
                            <FormatText text={attachment.data.label} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Date">
                            <FormatDate isoDate={attachment.data.date} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Type">
                            <FormatText text={attachment.data.type.split("/").at(1)} />
                        </DataBlock.Item>
                        <DataBlock.Item label="Size">
                            <FormatFileSize size={attachment.data.size} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
                <DataBlock.Root>
                    <DataBlock.Header>
                        <Title title="Métadonnées" />
                    </DataBlock.Header>
                    <DataBlock.Content>
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
                        <DataBlock.Item label="Id">
                            <FormatText text={attachment.data.id} />
                        </DataBlock.Item>
                    </DataBlock.Content>
                </DataBlock.Root>
            </Section.Item>
            <Section.Item>
                <embed
                    title={attachment.data.reference}
                    className="w-full min-h-[768px] h-fit rounded-md"
                    src={urlFile}
                    type={attachment.data.type}
                />
            </Section.Item>
        </Section.Root>
    )
}
