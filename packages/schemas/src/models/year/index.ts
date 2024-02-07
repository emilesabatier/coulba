import { yearInclude } from "./year.include"
import { yearModel } from "./year.model"
import { yearWith } from "./year.with"


export * as yearModel from "./year.model"
export type * from "./year.type"

export const year = {
    model: yearModel,
    include: yearInclude,
    with: yearWith
}
