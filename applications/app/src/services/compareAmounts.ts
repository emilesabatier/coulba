export function compareAmounts(a: number, b: number) {
    if (Math.abs(a - b) < 0.01) return true
    return false
}