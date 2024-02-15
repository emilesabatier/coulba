import { CalendarDate } from "@internationalized/date"
import { ICSEvent } from "../../components/calendar/calendar"


export function isDayInside(startingOn: ICSEvent["start"], currentDate: CalendarDate, endingOn: ICSEvent["end"]) {
    if (!currentDate) return false
    if ((currentDate.year < startingOn[0]) || (currentDate.year > endingOn[0])) return false
    if ((currentDate.month < startingOn[1]) || (currentDate.month > endingOn[1])) return false
    if ((currentDate.day < startingOn[2]) || (currentDate.day > endingOn[2])) return false
    return true
}
