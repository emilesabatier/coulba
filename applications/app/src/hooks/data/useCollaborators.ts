import { DashboardCollaborator, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const collaboratorsKey = "/dashboard/collaborator"

export function useCollaborators() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardCollaborator.ReadAllCollaboratorsReturn, Error>(collaboratorsKey)

    const parsedData = dashboardSchema.collaborator.readAllCollaboratorsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des collaborateurs sont invalides."),
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
