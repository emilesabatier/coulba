import { DashboardLesson, dashboardSchema } from '@monassosportive/schemas/routes'
import useSWR from 'swr'


export const lessonsKey = "/dashboard/lesson"

export function useLessons() {
    const { data, error, isLoading, isValidating } = useSWR<DashboardLesson.ReadAllLessonsReturn, Error>(lessonsKey)

    const parsedData = dashboardSchema.lesson.readAllLessonsReturn.safeParse(data)
    if (!parsedData.success) {
        return {
            data: undefined,
            error: new Error("Les données des cours sont invalides."),
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
