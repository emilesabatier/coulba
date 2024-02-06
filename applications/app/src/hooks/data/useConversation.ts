import { DashboardConversation, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const conversationKey = (idConversation?: string) => `/dashboard/conversation/${idConversation}`

export function useConversation(idConversation?: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardConversation.ReadOneConversationReturn, Error>(conversationKey(idConversation))

    const parsedData = dashboardSchema.conversation.readOneConversationReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données de la conversation sont invalides."),
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
