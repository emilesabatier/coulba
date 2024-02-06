export function removeDuplicates<T extends { [key: string]: unknown }>(items: T[], key: string) {
    return items.filter((item, index, array) => index === array.findIndex(foundItem => foundItem[key] === item[key]))
}
