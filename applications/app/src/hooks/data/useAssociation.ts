import { DashboardAssociation, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const associationKey = "/dashboard/association"

export function useAssociation() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardAssociation.ReadAssociationReturn, Error>(associationKey)

    const parsedData = dashboardSchema.association.readAssociationReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données de l'association sont invalides."),
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
