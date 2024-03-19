import { ButtonGhost } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { Fragment } from "react"
import { attachmentOptions } from "../../services/api/auth/attachments/attachmentsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { Loading } from "../layouts/loading"
import { DeleteAttachment } from "./deleteAttachment/deleteAttachment"
import { UpdateAttachment } from "./updateAttachment/updateAttachment"


export function AttachmentsList() {
    const attachments = useQuery(attachmentOptions)

    if (attachments.isPending) return <Loading />
    if (attachments.isError) return <ErrorMessage message={attachments.error.message} />
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-2 overflow-auto border border-neutral/25 rounded-sm p-4">
            {
                (!attachments.data || attachments.data?.length === 0) ? (<FormatNull />) : attachments.data.map((attachment, index) => {
                    return (
                        <Fragment>
                            {index === 0 ? null : (<div className="h-[1px] w-full bg-neutral/10" />)}
                            <div className="w-full flex justify-between items-center gap-4">
                                <div className="flex justify-start items-center gap-4 p-2">
                                    <h2>{attachment.label}</h2>
                                    <span className="text-neutral/50">{attachment.reference}</span>
                                </div>
                                <div className="flex justify-end items-center gap-1">
                                    <UpdateAttachment attachment={attachment}>
                                        <ButtonGhost
                                            icon={<IconPencil />}
                                        />
                                    </UpdateAttachment>
                                    <DeleteAttachment attachment={attachment}>
                                        <ButtonGhost
                                            icon={<IconTrash />}
                                            color="error"
                                        />
                                    </DeleteAttachment>
                                </div>
                            </div>
                        </Fragment>
                    )
                })
            }
        </div>
    )
}
