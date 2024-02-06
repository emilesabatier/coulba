export const isoStringToDateTime = (isoDate?: string | null) => {
    if ((isoDate === undefined) || (isoDate === null) || (String(new Date(isoDate)) === "Invalid Date")) return null
    return new Date(isoDate)
}