import { DashboardPermission, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const permissionsKey = "/dashboard/permission"

export function usePermissions() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardPermission.ReadAllPermissionsReturn, Error>(permissionsKey)

    const parsedData = dashboardSchema.permission.readAllPermissionsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des permissions sont invalides."),
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
