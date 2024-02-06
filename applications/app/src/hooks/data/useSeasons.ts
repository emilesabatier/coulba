import { DashboardSeason, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const seasonsKey = "/dashboard/season"

export function useSeasons() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardSeason.ReadAllSeasonsReturn, Error>(seasonsKey)

    const parsedData = dashboardSchema.season.ReadAllSeasonsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des saisons sont invalides."),
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
