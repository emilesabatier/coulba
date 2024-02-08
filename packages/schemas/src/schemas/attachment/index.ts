import { attachmentInclude } from "./attachment.include"
import { attachmentWith } from "./attachment.with"
export type * from "./attachment.type"

export const attachment = {
    include: attachmentInclude,
    with: attachmentWith
}
