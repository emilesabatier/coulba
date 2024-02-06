import { DashboardCollaborator, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const collaboratorKey = (idCollaborator: string) => `/dashboard/collaborator/${idCollaborator}`

export function useCollaborator(idCollaborator: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardCollaborator.ReadOneCollaboratorReturn, Error>(collaboratorKey(idCollaborator))

    const parsedData = dashboardSchema.collaborator.readOneCollaboratorReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données du collaborateur sont invalides."),
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
