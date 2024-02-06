import { toast } from "@monassosportive/design/overlays"
import { DashboardAnnouncement, dashboardSchema } from "@monassosportive/schemas/routes"
import { z } from "zod"
import { ReturnResponse } from "../../returnType"


type DeleteOneAnnouncement = {
    params: DashboardAnnouncement.DeleteOneAnnouncementParams
}

export async function deleteOneAnnouncement(props: DeleteOneAnnouncement): Promise<ReturnResponse<DashboardAnnouncement.DeleteOneAnnouncementReturn>> {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/dashboard/announcement/${props.params.id}`),
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            }
        )

        if (!response.ok) throw await response.json()

        const parsedResponse = dashboardSchema.announcement.deleteOneAnnouncementReturn.safeParse(await response.json())
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
