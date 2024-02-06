export function isOverlapping(array1: number[], array2: number[]) {
    // if (array1.length !== array2.length) return false
    return array1.some((x1, index1) => {
        const x2 = array2[index1]
        if ((x1 + x2) > 1) return true
    })
}