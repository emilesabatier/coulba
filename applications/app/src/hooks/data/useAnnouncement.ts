import { DashboardAnnouncement, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const announcementKey = (idAnnouncement?: string) => `/dashboard/announcement/${idAnnouncement}`

export function useAnnouncement(idAnnouncement?: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardAnnouncement.ReadOneAnnouncementReturn, Error>(announcementKey(idAnnouncement))

    const parsedData = dashboardSchema.announcement.readOneAnnouncementReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données de l'annonce sont invalides."),
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
