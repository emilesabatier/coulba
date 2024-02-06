import { DashboardSport, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const sportsKey = "/dashboard/sport"

export function useSports() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardSport.ReadAllSportsReturn, Error>(sportsKey)

    const parsedData = dashboardSchema.sport.ReadAllSportsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des sports sont invalides."),
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
