import { organizationScopes } from "@coulba/schemas/components"
import { getOptions } from "../../services/getOptions.service"


export const scopesTranslation: { [key in typeof organizationScopes[number]]: string } = {
    "company": "Entreprise",
    "association": "Association"
}
export const organizationScopeOptions = getOptions(scopesTranslation)
