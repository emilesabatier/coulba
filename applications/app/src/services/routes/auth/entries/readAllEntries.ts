import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export const entryKey = `/auth/entries`

export async function readAllEntries() {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}${entryKey}`),
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            }
        ).catch(() => { throw new Error("Fetch error") })
        if (!response.ok) throw new Error("Fetch response not ok")

        const parsedResponse = v.parse(v.array(auth.entries.read.return), await response.json())
        return parsedResponse
    } catch (error) {
        throw new Error("Erreur avec la récupération des données")
    }
}
