import { accountTypes } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const accountTypesTranslation: { [key in typeof accountTypes[number]]: string } = {
    "sheet": "Compte de bilan",
    "statement": "Compte de gestion",
    "special": "Compte spécial"
}
export const accountTypeOptions = getOptions(accountTypesTranslation)
