

export function isValidDate(date: string) {
    return !isNaN(new Date(date).getTime())
}
