import { AccountReturned, ContactReturned } from "@monassosportive/schemas/models"
import { capitalize } from "../../../services/capitalize.service"


type Account = (AccountReturned & { contact: ContactReturned }) | null

export const accountFormat = (account?: Account) => {
    if (!account) return ""
    return `${capitalize(account.contact.surname)} ${capitalize(account.contact.forename)}`
}
