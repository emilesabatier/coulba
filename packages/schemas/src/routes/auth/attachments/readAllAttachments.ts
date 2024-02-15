import * as v from "valibot"
import { readOneAttachmentReturn } from "./readOneAttachment"


// Output
export const readAllAttachmentsReturn = v.array(readOneAttachmentReturn)
