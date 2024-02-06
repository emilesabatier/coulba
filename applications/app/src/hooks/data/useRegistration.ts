import { DashboardRegistration, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const registrationKey = (idRegistrationForm: string, idRegistration: string) => `/dashboard/registration-form/${idRegistrationForm}/registration/${idRegistration}`

export function useRegistration(idRegistrationForm: string, idRegistration: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardRegistration.ReadOneRegistrationReturn, Error>(registrationKey(idRegistrationForm, idRegistration))

    const parsedData = dashboardSchema.registration.readOneRegistrationReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données de la préinscription sont invalides."),
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
