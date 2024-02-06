import { DashboardEvent, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const eventKey = (idEvent: string) => `/dashboard/event/${idEvent}`

export function useEvent(idEvent: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardEvent.ReadOneEventReturn, Error>(eventKey(idEvent))

    const parsedData = dashboardSchema.event.readOneEventReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données de l'évènement sont invalides."),
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
