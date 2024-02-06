import { attachmentInclude } from "./attachment.include.js"
import { attachmentModel } from "./attachment.model.js"
import { attachmentWith } from "./attachment.with.js"


export * as attachmentModel from "./attachment.model.js"
export type * from "./attachment.type.js"

export const attachment = {
    model: attachmentModel,
    include: attachmentInclude,
    with: attachmentWith
}
