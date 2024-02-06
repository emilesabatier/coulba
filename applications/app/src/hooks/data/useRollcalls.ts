import { DashboardRollcall, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const rollcallsKey = "/dashboard/rollcall"

export function useRollcalls() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardRollcall.ReadAllRollcallsReturn, Error>(rollcallsKey)

    const parsedData = dashboardSchema.rollcall.readAllRollcallsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des appels sont invalides."),
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
