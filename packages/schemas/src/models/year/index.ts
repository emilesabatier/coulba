import { yearInclude } from "./year.include.js"
import { yearModel } from "./year.model.js"
import { yearWith } from "./year.with.js"


export * as yearModel from "./year.model.js"
export type * from "./year.type.js"

export const year = {
    model: yearModel,
    include: yearInclude,
    with: yearWith
}
