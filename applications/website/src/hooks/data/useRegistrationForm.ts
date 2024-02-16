import { PublicRegistrationForm } from '@coulba/schemas/routes'
import { useEffect, useState } from 'react'
import { readOneRegistrationForm } from '../../services/routes/registrationForm/getRegistrationForm'


export function useRegistrationForm(idRegistrationForm: string | undefined) {
    const [result, setResult] = useState<PublicRegistrationForm.ReadOneRegistrationFormReturn | undefined>(undefined)
    const [loading, setLoading] = useState<boolean | null>(true)

    useEffect(() => {
        async function fetchLessons() {
            try {
                if (idRegistrationForm === undefined) return setLoading(false)

                const response = await readOneRegistrationForm({ params: { idRegistrationForm: idRegistrationForm } })

                if (response === false) {
                    setResult(undefined)
                    return setLoading(false)
                }
                setResult(response)
                setLoading(false)
            } catch (error) {
                setLoading(false)
            }
        }

        if (idRegistrationForm !== "") {
            fetchLessons()
        }
    }, [idRegistrationForm])

    return [result, loading] as [PublicRegistrationForm.ReadOneRegistrationFormReturn | undefined, boolean | null]
}
