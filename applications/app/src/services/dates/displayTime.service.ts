import { CalendarDate } from "@internationalized/date"
import { isSameDay } from "./isSameDay.service"
import { ICSEvent } from "../../components/calendar/calendar"


export function displayTime(displayDate: ICSEvent, date: CalendarDate) {
    if (displayDate.start[3] === undefined || displayDate.start[4] === undefined || displayDate.end[3] === undefined || displayDate.end[4] === undefined) return null

    const startingHours = displayDate.start[3] < 10 ? `0${displayDate.start[3]}` : `${displayDate.start[3]}`
    const startingMinutes = displayDate.start[4] < 10 ? `0${displayDate.start[4]}` : `${displayDate.start[4]}`
    const endingHours = displayDate.end[3] < 10 ? `0${displayDate.end[3]}` : `${displayDate.end[3]}`
    const endingMinutes = displayDate.end[4] < 10 ? `0${displayDate.end[4]}` : `${displayDate.end[4]}`

    if (isSameDay(date, displayDate.start) && isSameDay(date, displayDate.end)) {
        return `${startingHours}:${startingMinutes} - ${endingHours}:${endingMinutes}`
    }
    if (!isSameDay(date, displayDate.start) && !isSameDay(date, displayDate.end)) {
        return `Début - Fin`
    }
    if (isSameDay(date, displayDate.start) && !isSameDay(date, displayDate.end)) {
        return `${startingHours}:${startingMinutes} - Fin`
    }
    if (!isSameDay(date, displayDate.start) && isSameDay(date, displayDate.end)) {
        return `Début - ${endingHours}:${endingMinutes}`
    }

    return null
}
