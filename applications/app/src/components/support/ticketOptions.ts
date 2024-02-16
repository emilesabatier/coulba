import { ticketTypes } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const ticketTypesTranslation: { [key in typeof ticketTypes[number]]: string } = {
    "bug": "Problème avec l'application",
    "enhancement": "Suggestion d'amélioration",
    "other": "Autre"
}
export const ticketTypeOptions = getOptions(ticketTypesTranslation)
