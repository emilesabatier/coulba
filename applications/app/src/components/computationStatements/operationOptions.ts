import { operations } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const operationsTranslation: { [key in typeof operations[number]]: string } = {
    "minus": "Soustraction (-)",
    "plus": "Addition (+)"
}
export const operationOptions = getOptions(operationsTranslation)
