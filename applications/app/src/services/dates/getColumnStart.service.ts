import { isOverlapping } from "./isOverlapping.service"


export function getColumnStart(datesMatrix: number[][], newDatesMatrix: number[]) {
    let currentIndex = 0
    const response = datesMatrix.some((dates, datesIndex) => {
        if (isOverlapping(newDatesMatrix, dates)) return false

        currentIndex = datesIndex
        return true
    })
    return {
        success: response,
        startingColSlot: currentIndex
    }
}
