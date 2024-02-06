import { DashboardConversation, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const conversationsKey = "/dashboard/conversation"

export function useConversations() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardConversation.ReadAllConversationsReturn, Error>(conversationsKey)

    const parsedData = dashboardSchema.conversation.readAllConversationsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des conversations sont invalides."),
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
