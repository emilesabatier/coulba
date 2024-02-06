import { DashboardSport, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const sportKey = (idSport: string) => `/dashboard/sport/${idSport}`

export function useSport(idSport: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardSport.ReadOneSportReturn, Error>(sportKey(idSport))

    const parsedData = dashboardSchema.sport.readOneSportReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données du sport sont invalides."),
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
