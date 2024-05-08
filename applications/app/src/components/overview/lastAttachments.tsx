import { ButtonGhost, ButtonOutlineContent, ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconEye, IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { Link } from "@tanstack/react-router"
import { attachmentsOptions } from "../../services/api/auth/attachments/attachmentsOptions"
import { CreateAttachment } from "../attachments/create/createAttachment"
import { ReadAttachment } from "../attachments/read/readAttachment"
import { ErrorMessage } from "../layouts/errorMessage"


export function LastAttachments() {
    const attachments = useQuery(attachmentsOptions)

    if (attachments.isLoading) return <CircularLoader />
    if (attachments.isError) return <ErrorMessage message={attachments.error.message} />
    if (!attachments.data) return null

    const lastAttachments = attachments.data
        .sort((a, b) => b.createdOn.localeCompare(a.createdOn))
        .slice(0, 10)

    return (
        <div className="w-full max-w-[400px] h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
            <div className="w-full flex justify-between items-center gap-4 p-4 border-b border-neutral/10">
                <h2 className="text-xl text-neutral/75">Derniers fichiers</h2>
                <CreateAttachment>
                    <ButtonPlain
                        icon={<IconPlus />}
                    />
                </CreateAttachment>
            </div>
            <div className="flex flex-col justify-start items-stretch h-[300px] overflow-auto">
                {lastAttachments.length > 0 ? null : <FormatNull text="Aucune donnée" className="w-full p-4" />}
                {lastAttachments.map((attachment) => {
                    return (
                        <div
                            key={attachment.id}
                            className="flex justify-between items-center gap-4 p-4 border-b border-neutral/5 last:border-b-0"
                        >
                            <span>{attachment.label}</span>
                            <FormatDateTime isoDate={attachment.createdOn} className="ml-auto" />
                            <ReadAttachment idAttachment={attachment.id}>
                                <ButtonGhost
                                    icon={<IconEye />}
                                />
                            </ReadAttachment>
                        </div>
                    )
                })}
            </div>
            <div className="w-full p-4 border-t border-neutral/10">
                <Link to="/fichiers">
                    <ButtonOutlineContent
                        text="Voir tous les fichiers"
                        className="w-full border-dashed justify-center"
                    />
                </Link>
            </div>
        </div>
    )
}
