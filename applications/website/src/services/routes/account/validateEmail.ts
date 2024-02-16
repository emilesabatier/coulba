import { PublicAccount } from "@coulba/schemas/routes"
import { z } from "zod"
import { ReturnResponse } from "../returnType"


type ValidateEmail = {
    body: PublicAccount.ValidateEmailBody
}

export async function validateEmail(props: ValidateEmail): Promise<ReturnResponse<undefined>> {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/public/account/validate-email`),
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
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
            // toast({ title: "Erreur avec le serveur.", variant: "error" })
            return {
                status: false,
                message: "Erreur avec le serveur."
            }
        }

        // toast({ title: parsedError.data.message, description: parsedError.data.description, variant: "error" })

        return {
            status: false,
            message: parsedError.data.message,
            description: parsedError.data.description
        }
    }
}
