import { PublicRegistrationForm } from "@monassosportive/schemas/routes"


type ReadOneRegistrationForm = {
    params: PublicRegistrationForm.ReadOneRegistrationFormParams
}

export async function readOneRegistrationForm(props: ReadOneRegistrationForm) {
    try {
        const response = await fetch(
            new URL(`${import.meta.env.VITE_PUBLIC_API_BASE}/public/registration-form/${props.params.idRegistrationForm}`),
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
                credentials: 'include',
                cache: "no-store"
            }
        )
        if (response.ok) return response.json() as Promise<PublicRegistrationForm.ReadOneRegistrationFormReturn>
        return false
    } catch {
        return false
    }
}
