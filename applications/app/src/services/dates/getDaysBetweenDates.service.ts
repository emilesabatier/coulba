import { CreateManyLessonOccurrencesBody } from "../../components/lesson/lessonOccurrence/createManyLessonOccurrences/createManyLessonOccurrences.schema"


export function getDaysBetweenDates(fromDate: string | undefined, toDate: string | undefined, day: CreateManyLessonOccurrencesBody["day"] | undefined, startingTime: string | undefined | null, duration: number | undefined | null, state: CreateManyLessonOccurrencesBody["state"] | undefined) {
    const result = []
    const weekDays = { sunday: 0, monday: 1, tuesday: 2, wednesday: 3, thursday: 4, friday: 5, saturday: 6 } as { [key: string]: number }

    if (!fromDate || !toDate || !day || !startingTime || !duration) return []
    const dayNumber = weekDays[day.toLowerCase()]

    const current = new Date(fromDate)

    current.setDate(current.getDate() + (dayNumber - current.getDay() + 7) % 7)

    while (current < new Date(toDate)) {
        const startingAt = new Date(new Date(+current).setHours(Number(startingTime.split(" : ").at(0)), Number(startingTime.split(":").at(1)), 0)).toISOString()
        result.push({
            state: !state ? "tentative" : state,
            startingAt: startingAt,
            duration: duration
        })
        current.setDate(current.getDate() + 7)
    }
    return result
}
