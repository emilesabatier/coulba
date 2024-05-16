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

        return v.parse(props.schema, await response.json())
    } catch (error) {
        if (import.meta.env.VITE_ENV !== "production") {
            if (error instanceof v.ValiError) {
                console.log(v.flatten<typeof props.schema>(error))
            }
            else {
                console.log(error)
            }
        }

        if (props.message) toast({ title: props.message ?? "Erreur avec la requête", variant: "error" })
        throw new Error("Error with the response")
    }
}
