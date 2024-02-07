import { z } from "zod"
import { readOneAttachmentReturn } from "./readOneAttachment"


// Output
export const readAllAttachmentsReturn = readOneAttachmentReturn.array()
export type ReadAllAttachmentsReturn = z.infer<typeof readAllAttachmentsReturn>
