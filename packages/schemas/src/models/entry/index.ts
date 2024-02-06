import { entryInclude } from "./entry.include.js"
import { entryModel } from "./entry.model.js"
import { entryWith } from "./entry.with.js"


export * as entryModel from "./entry.model.js"
export type * from "./entry.type.js"

export const entry = {
    model: entryModel,
    include: entryInclude,
    with: entryWith
}
