import { DashboardRegistrationForm, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const registrationFormKey = (idRegistrationForm: string) => `/dashboard/registration-form/${idRegistrationForm}`

export function useRegistrationForm(idRegistrationForm: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardRegistrationForm.ReadOneRegistrationFormReturn, Error>(registrationFormKey(idRegistrationForm))

    const parsedData = dashboardSchema.registrationForm.readOneRegistrationFormReturn.safeParse(data)
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
