export function capitalize(str: string | null | undefined) {
    if (!str) return ""
    return String(str)
        .toLowerCase()
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}
