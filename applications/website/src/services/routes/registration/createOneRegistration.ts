import { PublicRegistration } from "@coulba/schemas/routes"


type CreateOneRegistration = {
    body: PublicRegistration.CreateOneRegistrationBody
}

export async function createOneRegistration(props: CreateOneRegistration) {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/public/registration/`),
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                body: JSON.stringify(props.body),
            }
        )
        return response.ok

    } catch { return false }
}
