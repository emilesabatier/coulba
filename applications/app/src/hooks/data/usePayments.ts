import { DashboardPayment, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const paymentsKey = "/dashboard/payment"

export function usePayments() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardPayment.ReadAllPaymentsReturn, Error>(paymentsKey)

    const parsedData = dashboardSchema.payment.readAllPaymentsReturn.safeParse(data)

    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des paiements sont invalides."),
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
