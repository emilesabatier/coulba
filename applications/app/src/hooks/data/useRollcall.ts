import { DashboardRollcall, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const rollcallKey = (idRollcall: string) => `/dashboard/rollcall/${idRollcall}`

export function useRollcall(idRollcall: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardRollcall.ReadOneRollcallReturn, Error>(rollcallKey(idRollcall))

    const parsedData = dashboardSchema.rollcall.readOneRollcallReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données de l'appel sont invalides."),
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
