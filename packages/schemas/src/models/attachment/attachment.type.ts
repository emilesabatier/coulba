import { attachmentInclude } from "./attachment.include.js"
import { attachmentModel } from "./attachment.model.js"


type attachmentInclude = keyof typeof attachmentInclude
type attachmentModel = typeof attachmentModel.$inferSelect

export type AttachmentReturned = Pick<attachmentModel, attachmentInclude>
