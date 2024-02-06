import { DashboardOrder, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const ordersKey = "/dashboard/order"

export function useOrders() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardOrder.ReadAllOrdersReturn, Error>(ordersKey)

    const parsedData = dashboardSchema.order.readAllOrdersReturn.safeParse(data)

    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des commandes sont invalides."),
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
