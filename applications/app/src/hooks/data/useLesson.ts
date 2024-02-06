import { DashboardLesson, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const lessonKey = (idLesson: string) => `/dashboard/lesson/${idLesson}`

export function useLesson(idLesson: string) {
    const { data, error, isLoading, isValidating } = useSWR<DashboardLesson.ReadOneLessonReturn, Error>(lessonKey(idLesson))

    const parsedData = dashboardSchema.lesson.readOneLessonReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données du cours sont invalides."),
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
