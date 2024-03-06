import { ReturnResponse } from "../../../routes/returnType"


export async function signOut(): Promise<ReturnResponse<undefined>> {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/public/session/sign-out`),
            {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include'
            }
        )

        if (!response.ok) throw await response.json()

        return {
            status: true,
            data: undefined
        }

    } catch (error) {
        return {
            status: false,
            message: String(error)
        }
    }
}
