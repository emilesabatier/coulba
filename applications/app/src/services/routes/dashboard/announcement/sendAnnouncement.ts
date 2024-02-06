import { toast } from "@monassosportive/design/overlays"
import { DashboardAnnouncement } from "@monassosportive/schemas/routes"
import { z } from "zod"
import { ReturnResponse } from "../../returnType"


type SendAnnouncement = {
    params: DashboardAnnouncement.SendAnnouncementParams,
}

export async function sendAnnouncement(props: SendAnnouncement): Promise<ReturnResponse<DashboardAnnouncement.SendAnnouncementReturn>> {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/dashboard/announcement/send/${props.params.id}`),
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            }
        )

        if (!response.ok) throw await response.json()

        return {
            status: true,
            data: undefined
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
