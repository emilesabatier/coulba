import { DashboardPosition, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const positionsKey = "/dashboard/position"

export function usePositions() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardPosition.ReadAllPositionsReturn, Error>(positionsKey)

    const parsedData = dashboardSchema.position.readAllPositionsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des postes sont invalides."),
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
