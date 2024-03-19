import { queryOptions } from "@tanstack/react-query"
import { readAttachments } from "./readAttachments"


export const attachmentOptions = queryOptions({
    queryKey: ["attachments"],
    queryFn: readAttachments
})
