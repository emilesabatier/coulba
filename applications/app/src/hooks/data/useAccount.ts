import { DashboardAccount, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const accountKey = (idAccount: string) => `/dashboard/account/${idAccount}`

export function useAccount(idAccount: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardAccount.ReadOneAccountReturn, Error>(accountKey(idAccount))

    const parsedData = dashboardSchema.account.readOneAccountReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données du compte sont invalides."),
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
