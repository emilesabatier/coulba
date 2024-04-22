import { attachments } from "../../models/index.js"
import { attachmentInclude } from "./attachment.include.js"


type attachmentInclude = keyof typeof attachmentInclude
type attachments = typeof attachments.$inferSelect

export type AttachmentReturned = Pick<attachments, attachmentInclude>
