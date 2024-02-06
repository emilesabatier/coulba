import { DashboardSubscription, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const subscriptionKey = (idSubscription?: string) => `/dashboard/subscription/${idSubscription}`

export function useSubscription(id?: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardSubscription.ReadOneSubscriptionReturn, Error>(subscriptionKey(id))

    const parsedData = dashboardSchema.subscription.readOneSubscriptionReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données de l'abonnement sont invalides."),
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
