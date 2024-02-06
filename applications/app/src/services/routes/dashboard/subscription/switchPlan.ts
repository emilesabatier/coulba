import { toast } from "@monassosportive/design/overlays"
import { DashboardSubscription, dashboardSchema } from "@monassosportive/schemas/routes"
import { z } from "zod"
import { ReturnResponse } from "../../returnType"


type SwitchSubscription = {
    params: DashboardSubscription.SwitchSubscriptionParams
    body: DashboardSubscription.SwitchSubscriptionBody
}

export async function switchSubscription(props: SwitchSubscription): Promise<ReturnResponse<DashboardSubscription.SwitchSubscriptionReturn>> {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/dashboard/subscription/${props.params.idSubscription}/switch`),
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(props.body)
            }
        )

        const responseData = await response.json()
        if (!response.ok) throw responseData
        const parsedResponse = dashboardSchema.subscription.switchSubscriptionReturn.safeParse(responseData)
        if (!parsedResponse.success) throw parsedResponse.error.message

        return {
            status: true,
            data: parsedResponse.data
        }

    } catch (error) {
        const parsedError = z.object({ idError: z.string(), message: z.string(), description: z.string().optional() }).safeParse(error)
        if (!parsedError.success) {
            toast({ title: "Erreur avec le serveur.", variant: "error" })
            return {
                status: false,
                message: "Erreur avec le serveur."
            }
        }

        toast({ title: parsedError.data.message, description: parsedError.data.description, variant: "error" })

        return {
            status: false,
            message: parsedError.data.message,
            description: parsedError.data.description
        }
    }
}
