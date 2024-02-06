import { DashboardRegistration, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const registrationsKey = (idRegistrationForm: string) => `/dashboard/registration-form/${idRegistrationForm}/registration`

export function useRegistrations(idRegistrationForm: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardRegistration.ReadAllRegistrationsReturn, Error>(registrationsKey(idRegistrationForm))

    const parsedData = dashboardSchema.registration.readAllRegistrationsReturn.safeParse(data)

    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des préinscriptions sont invalides."),
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
