import { DashboardAnnouncement, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const announcementsKey = "/dashboard/announcement"

export function useAnnouncements() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardAnnouncement.ReadAllAnnouncementsReturn, Error>(announcementsKey)

    const parsedData = dashboardSchema.announcement.readAllAnnouncementsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des annonces sont invalides."),
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
