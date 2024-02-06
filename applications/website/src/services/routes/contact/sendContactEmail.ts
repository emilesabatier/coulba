import { PublicContact } from "@monassosportive/schemas/routes"
import { z } from "zod"
import { ReturnResponse } from "../returnType"


type SendContactEmail = {
    body: PublicContact.SendContactEmailBody
}

export async function sendContactEmail(props: SendContactEmail): Promise<ReturnResponse<undefined>> {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/public/contact/send-email`),
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                cache: "no-store",
                body: JSON.stringify(props.body),
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
            return {
                status: false,
                message: "Erreur avec le serveur."
            }
        }

        return {
            status: false,
            message: parsedError.data.message,
            description: parsedError.data.description
        }
    }
}
