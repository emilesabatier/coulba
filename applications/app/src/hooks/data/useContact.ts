import { DashboardContact, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const contactKey = (idContact: string) => `/dashboard/contact/${idContact}`

export function useContact(idContact: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardContact.ReadOneContactReturn, Error>(contactKey(idContact))

    const parsedData = dashboardSchema.contact.readOneContactReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données du contact sont invalides."),
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
