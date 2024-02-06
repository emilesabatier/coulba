import { DashboardRole, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const rolesKey = "/dashboard/role"

export function useRoles() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardRole.ReadAllRolesReturn, Error>(rolesKey)

    const parsedData = dashboardSchema.role.readAllRolesReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des rôles sont invalides."),
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
