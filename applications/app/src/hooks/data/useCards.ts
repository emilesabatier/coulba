import { DashboardCard, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const cardsKey = "/dashboard/card"

export function useCards() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardCard.ReadAllCardsReturn, Error>(cardsKey)

    const parsedData = dashboardSchema.card.readAllCardsReturn.safeParse(data)

    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des cartes sont invalides."),
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
