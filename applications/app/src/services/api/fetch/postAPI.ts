import { toast } from "@coulba/design/overlays"
import * as v from "valibot"


type PostAPI<T extends v.ObjectEntries> = {
    path: string
    schema: v.ObjectSchema<T>
    body: object
    message?: string
}

export async function postAPI<T extends v.ObjectEntries>(props: PostAPI<T>) {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}${props.path}`),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(props.body)
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
    }
}
