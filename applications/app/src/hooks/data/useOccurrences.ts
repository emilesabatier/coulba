import { DashboardOccurrence, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const occurrencesKey = "/dashboard/occurrence"

export function useOccurrences() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardOccurrence.ReadAllOccurrencesReturn, Error>(occurrencesKey)

    const parsedData = dashboardSchema.occurrence.readAllOccurrencesReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des occurrences sont invalides."),
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
