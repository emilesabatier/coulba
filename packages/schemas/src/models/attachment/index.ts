import { attachmentInclude } from "./attachment.include"
import { attachmentModel } from "./attachment.model"
import { attachmentWith } from "./attachment.with"


export * as attachmentModel from "./attachment.model"
export type * from "./attachment.type"

export const attachment = {
    model: attachmentModel,
    include: attachmentInclude,
    with: attachmentWith
}
