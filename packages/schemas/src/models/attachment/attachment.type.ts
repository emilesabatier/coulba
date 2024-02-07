import { attachmentInclude } from "./attachment.include"
import { attachmentModel } from "./attachment.model"


type attachmentInclude = keyof typeof attachmentInclude
type attachmentModel = typeof attachmentModel.$inferSelect

export type AttachmentReturned = Pick<attachmentModel, attachmentInclude>
