import { toast } from "@coulba/design/overlays"
import * as v from "valibot"


type BlobAPI<T extends v.ObjectEntries> = {
    path: string
    schema: v.ObjectSchema<T> | v.BaseSchema
    body?: object
    message?: string
    method?: string
}

export async function blobAPI<T extends v.ObjectEntries>(props: BlobAPI<T>) {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}${props.path}`),
            {
                method: props.method ?? "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(props.body)
            }
        )

        if (!response.ok) throw new Error("Error with the response")

        return v.parse(props.schema, await response.blob())
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
        return undefined
    }
}
