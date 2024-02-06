import { DashboardVoucher, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const vouchersKey = "/dashboard/voucher"

export function useVouchers() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardVoucher.ReadAllVouchersReturn, Error>(vouchersKey)

    const parsedData = dashboardSchema.voucher.readAllVouchersReturn.safeParse(data)

    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des bons de réduction sont invalides."),
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
