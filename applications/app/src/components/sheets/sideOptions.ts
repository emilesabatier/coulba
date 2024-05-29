import { sheetSides } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const sidesTranslation: { [key in typeof sheetSides[number]]: string } = {
    "asset": "Actif",
    "liability": "Passif"
}
export const sideOptions = getOptions(sidesTranslation)
