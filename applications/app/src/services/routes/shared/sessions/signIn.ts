import { shared } from "@coulba/schemas/routes"
import * as v from "valibot"
import { ReturnResponse } from "../../returnType"


export type SignIn = {
    body: v.Output<typeof shared.sessions.signIn.body>
}

export async function signIn(props: SignIn): Promise<ReturnResponse<undefined>> {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/shared/sessions/sign-in`),
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(props.body)
            }
        )

        if (!response.ok) throw await response.json()

        return {
            status: true,
            data: undefined
        }

    } catch (error) {
        // const parsedError = z.object({ idError: z.string(), message: z.string(), description: z.string().optional() }).safeParse(error)
        // if (!parsedError.success) {
        //     toast({ title: "Erreur avec le serveur.", variant: "error" })
        //     return {
        //         status: false,
        //         message: "Erreur avec le serveur."
        //     }
        // }

        // toast({ title: parsedError.data.message, description: parsedError.data.description, variant: "error" })

        return {
            status: false,
            message: String(error)
        }
    }
}
