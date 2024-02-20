import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"

type ReadEntry = {
    params: {
        idEntry?: string | null
    }
}
export const entryKey = (idEntry: string) => `/auth/entries/${idEntry}`

export async function readEntry(props: ReadEntry) {
    if (!props.params.idEntry) throw new Error("Missing id")

    const response = await fetch(
        new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}${entryKey(props.params.idEntry)}`),
        {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include'
        }
    )
    if (!response.ok) throw new Error("Fetch response not ok")

    const parsedResponse = v.parse(auth.entries.read.return, await response.json())
    return parsedResponse
}
