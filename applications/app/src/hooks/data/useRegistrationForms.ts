import { DashboardRegistrationForm, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const registrationFormsKey = `/dashboard/registration-form`

export function useRegistrationForms() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardRegistrationForm.ReadAllRegistrationFormsReturn, Error>(registrationFormsKey)

    const parsedData = dashboardSchema.registrationForm.readAllRegistrationFormsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des formulaires de préinscriptions sont invalides."),
            isLoading,
            isValidating
        }
    }

    return ({
        data: parsedData.data,
        error,
        isLoading,
        isValidating
    })
}
