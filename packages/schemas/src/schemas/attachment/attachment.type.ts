import { attachments } from "../../models"
import { attachmentInclude } from "./attachment.include"


type attachmentInclude = keyof typeof attachmentInclude
type attachments = typeof attachments.$inferSelect

export type AttachmentReturned = Pick<attachments, attachmentInclude>
