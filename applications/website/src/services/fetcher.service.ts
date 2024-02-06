import { FromServerData } from "../hooks/data/FromServerData"


export async function fetcher<T extends FromServerData>(path: string, method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH", body?: string) {
    try {
        const response = await fetch(
            new URL(`${process.env.NEXT_PUBLIC_API_BASE}${path}`),
            {
                method: method,
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: body
            }
        )

        if (response.ok) {
            const textData = await response.text()
            let data
            try {
                data = JSON.parse(textData) as T
            } catch {
                data = undefined
            }
            return {
                success: true,
                data: data
            }
        }
        return {
            success: false,
            error: response.body
        }
    } catch (error) {
        return {
            success: false,
            error: String(error)
        }
    }
}
