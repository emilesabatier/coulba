import { journalInclude } from "./journal.include.js"
import { journalModel } from "./journal.model.js"
import { journalWith } from "./journal.with.js"


export * as journalModel from "./journal.model.js"
export type * from "./journal.type.js"

export const journal = {
    model: journalModel,
    include: journalInclude,
    with: journalWith
}
