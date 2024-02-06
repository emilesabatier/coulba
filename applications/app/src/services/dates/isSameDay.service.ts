import { CalendarDate } from "@internationalized/date"
import { ICSEvent } from "../../components/calendar/calendar"


export function isSameDay(calendarDate: CalendarDate, icsDate: ICSEvent["start"]) {
    if (!calendarDate || !icsDate) return true
    if (calendarDate.year !== icsDate[0]) return false
    if (calendarDate.month !== icsDate[1]) return false
    if (calendarDate.day !== icsDate[2]) return false
    return true
}
