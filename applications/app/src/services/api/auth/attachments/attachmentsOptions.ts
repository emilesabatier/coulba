import { queryOptions } from "@tanstack/react-query"
import { readAttachments } from "./readAttachments"
import { readAttachment } from "./readAttachment"


export const attachmentsOptions = queryOptions({
    queryKey: ["attachments"],
    queryFn: readAttachments
})

export const attachmentOptions = (idAttachment: string) => queryOptions({
    queryKey: ["transactions", idAttachment],
    queryFn: () => readAttachment({ params: { idAttachment: idAttachment } })
})
