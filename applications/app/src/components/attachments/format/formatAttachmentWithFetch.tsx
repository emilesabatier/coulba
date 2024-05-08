import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { attachmentOptions } from "../../../services/api/auth/attachments/attachmentsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { ReadAttachment } from "../read/readAttachment"
import { formatAttachment } from "./formatAttachment"


type FormatAttachmentWithFetch = {
    idAttachment: v.Output<typeof auth.attachments.get.return>["id"]
}

export function FormatAttachmentWithFetch(props: FormatAttachmentWithFetch) {
    const attachment = useQuery(attachmentOptions(props.idAttachment))

    if (attachment.isLoading) return (<CircularLoader />)
    if (attachment.isError) return <ErrorMessage message={attachment.error.message} />
    if (!attachment.data) return <FormatNull />
    return (
        <ReadAttachment idAttachment={props.idAttachment}>
            <FormatText
                text={formatAttachment(attachment.data)}
                className="underline hover:no-underline"
            />
        </ReadAttachment>
    )
}
