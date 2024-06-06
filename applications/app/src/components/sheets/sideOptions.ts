import { sides } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const sidesTranslation: { [key in typeof sides[number]]: string } = {
    "asset": "Actif",
    "liability": "Passif"
}
export const sideOptions = getOptions(sidesTranslation)
