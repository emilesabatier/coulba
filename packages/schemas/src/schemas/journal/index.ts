import { journalInclude } from "./journal.include"
import { journalWith } from "./journal.with"
export type * from "./journal.type"

export const journal = {
    include: journalInclude,
    with: journalWith
}
