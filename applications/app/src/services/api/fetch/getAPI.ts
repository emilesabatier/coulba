import { toast } from "@coulba/design/overlays"
import * as v from "valibot"


type GetAPI<T extends v.ObjectSchema<v.ObjectEntries> | v.ArraySchema<v.ObjectSchema<v.ObjectEntries>>> = {
    path: string
    schema: T
    message?: string
}

export async function getAPI<T extends v.ObjectSchema<v.ObjectEntries> | v.ArraySchema<v.ObjectSchema<v.ObjectEntries>>>(props: GetAPI<T>) {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}${props.path}`),
            {
                method: "GET",
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
