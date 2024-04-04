import { ticketTypes } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const ticketTypesTranslation: { [key in typeof ticketTypes[number]]: string } = {
    "bug": "Problème",
    "enhancement": "Suggestion",
    "need": "Besoin",
    "other": "Autre"
}
export const ticketTypeOptions = getOptions(ticketTypesTranslation)
