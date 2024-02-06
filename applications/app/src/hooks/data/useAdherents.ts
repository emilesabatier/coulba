import { DashboardAdherent, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const adherentsKey = "/dashboard/adherent"

export function useAdherents() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardAdherent.ReadAllAdherentsReturn, Error>(adherentsKey)

    const parsedData = dashboardSchema.adherent.readAllAdherentsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des adhérents sont invalides."),
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
