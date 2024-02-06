import { DashboardPosition, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const positionKey = (idPosition: string) => `/dashboard/position/${idPosition}`

export function usePosition(idPosition: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardPosition.ReadOnePositionReturn, Error>(positionKey(idPosition))

    const parsedData = dashboardSchema.position.readOnePositionReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données du poste sont invalides."),
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
