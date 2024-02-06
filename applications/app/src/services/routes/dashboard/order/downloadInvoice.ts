import { toast } from "@monassosportive/design/overlays"
import { DashboardInvoice } from "@monassosportive/schemas/routes"
import { z } from "zod"


type DownloadInvoice = {
    params: DashboardInvoice.DownloadPDFParams
}

export async function downloadInvoice(props: DownloadInvoice) {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/dashboard/invoice/${props.params.id}/download`),
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            }
        )

        if (!response.ok) throw await response.json()

        // const parsedResponse = dashboardSchema.order.refreshOrdersReturn.safeParse(await response.json())
        // if (!parsedResponse.success) throw parsedResponse.error.message

        return {
            status: true,
            data: await response.blob()
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
