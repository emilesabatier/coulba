import { DashboardEvent, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const eventsKey = "/dashboard/event"

export function useEvents() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardEvent.ReadAllEventsReturn, Error>(eventsKey)

    const parsedData = dashboardSchema.event.readAllEventsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des évènements sont invalides."),
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
