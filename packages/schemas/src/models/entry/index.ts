import { entryInclude } from "./entry.include"
import { entryModel } from "./entry.model"
import { entryWith } from "./entry.with"


export * as entryModel from "./entry.model"
export type * from "./entry.type"

export const entry = {
    model: entryModel,
    include: entryInclude,
    with: entryWith
}
