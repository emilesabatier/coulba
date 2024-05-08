import { toast } from "@coulba/design/overlays"
import * as v from "valibot"


type DeleteAPI<T extends v.ObjectEntries> = {
    path: string
    schema: v.ObjectSchema<T>
    message?: string
}

export async function deleteAPI<T extends v.ObjectEntries>(props: DeleteAPI<T>) {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}${props.path}`),
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            }
        )

        if (!response.ok) throw new Error("Error with the response")

        const parsedResponse = v.safeParse(props.schema, await response.json())
        if (!parsedResponse.success) throw new Error(parsedResponse.issues.toString())

        return {
            status: true,
            data: parsedResponse.output
        } as const

    } catch (error) {
        if (import.meta.env.VITE_ENV !== "production") console.log(error)

        if (props.message) toast({ title: props.message ?? "Erreur avec la requête", variant: "error" })
        return {
            status: false
        } as const
    }
}
