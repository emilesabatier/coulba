import { systems } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const systemsTranslation: { [key in typeof systems[number]]: string } = {
    "condensed": "Abrégé",
    "base": "De base",
    "developed": "Développé"
}
export const systemOptions = getOptions(systemsTranslation)
