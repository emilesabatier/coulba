import { ChipColors } from "../../../../../packages/design/src/layouts/chip"
import { getOptions } from "../../services/getOptions.service"


export const tags = ["dev", "new"] as const

export const tagsTranslation: { [key in typeof tags[number]]: string } = {
    "dev": "En développement",
    "new": "Nouveau"
}
export const tagOptions = getOptions(tagsTranslation)

export const tagColors: { [key in typeof tags[number]]: ChipColors } = {
    "dev": "error",
    "new": "success"
}
