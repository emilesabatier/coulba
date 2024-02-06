import { DashboardContact, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const contactsKey = "/dashboard/contact"

export function useContacts() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardContact.ReadAllContactsReturn, Error>(contactsKey)

    const parsedData = dashboardSchema.contact.readAllContactsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des contacts sont invalides."),
            isLoading,
            isValidating
        }
    }

    return ({
        data: parsedData.data,
        error,
        isLoading,
        isValidating
    })
}
