import { z } from "zod"
import { readOneAttachmentReturn } from "./readOneAttachment.js"


// Output
export const readAllAttachmentsReturn = readOneAttachmentReturn.array()
export type ReadAllAttachmentsReturn = z.infer<typeof readAllAttachmentsReturn>
