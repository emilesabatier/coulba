import { queryOptions } from "@tanstack/react-query"
import { readAttachment } from "./readAttachment"
import { readAttachments } from "./readAttachments"


export const attachmentsOptions = queryOptions({
    queryKey: ["attachments"],
    queryFn: readAttachments
})

export const attachmentOptions = (idAttachment: string) => queryOptions({
    queryKey: ["attachments", idAttachment],
    queryFn: () => readAttachment({ params: { idAttachment: idAttachment } })
})
