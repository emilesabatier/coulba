import { journalInclude } from "./journal.include"
import { journalModel } from "./journal.model"
import { journalWith } from "./journal.with"


export * as journalModel from "./journal.model"
export type * from "./journal.type"

export const journal = {
    model: journalModel,
    include: journalInclude,
    with: journalWith
}
