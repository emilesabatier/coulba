import { CalendarDate } from "@internationalized/date"
import { ICSEvent } from "../../components/calendar/calendar"


export function isDayInside(startingAt: ICSEvent["start"], currentDate: CalendarDate, endingAt: ICSEvent["end"]) {
    if (!currentDate) return false
    if ((currentDate.year < startingAt[0]) || (currentDate.year > endingAt[0])) return false
    if ((currentDate.month < startingAt[1]) || (currentDate.month > endingAt[1])) return false
    if ((currentDate.day < startingAt[2]) || (currentDate.day > endingAt[2])) return false
    return true
}
