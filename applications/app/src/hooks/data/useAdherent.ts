import { DashboardAdherent, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const adherentKey = (idAdherent: string) => `/dashboard/adherent/${idAdherent}`

export function useAdherent(idAdherent: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardAdherent.ReadOneAdherentReturn, Error>(adherentKey(idAdherent))

    const parsedData = dashboardSchema.adherent.readOneAdherentReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données de l'adhérent sont invalides."),
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
