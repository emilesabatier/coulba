import { flows } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const flowsTranslation: { [key in typeof flows[number]]: string } = {
    "credit": "Crédit",
    "debit": "Débit"
}
export const flowOptions = getOptions(flowsTranslation)
