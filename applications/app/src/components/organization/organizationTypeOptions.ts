import { types } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const typesTranslation: { [key in typeof types[number]]: string } = {
    "company": "Entreprise",
    "association": "Association"
}
export const organizationTypeOptions = getOptions(typesTranslation)
