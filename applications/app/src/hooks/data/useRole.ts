import { DashboardRole, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const roleKey = (idRole: string) => `/dashboard/role/${idRole}`

export function useRole(idRole: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardRole.ReadOneRoleReturn, Error>(roleKey(idRole))

    const parsedData = dashboardSchema.role.readOneRoleReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données du rôle sont invalides."),
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
