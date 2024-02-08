import { entryInclude } from "./entry.include"
import { entryWith } from "./entry.with"
export type * from "./entry.type"

export const entry = {
    include: entryInclude,
    with: entryWith
}
