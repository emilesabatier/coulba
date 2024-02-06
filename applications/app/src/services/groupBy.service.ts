
// export function groupBy<T extends { [key: string]: unknown | string }>(items: T[], key: string) {
//     if (items.length === 0) { }
//     if (typeof items.at(0)?.[key] !== "string") return items

//     return items?.reduce((object, item) => {
//         (object[item[key]] = object[item[key]] || []).push(item)
//         return object
//     }, {})

// }
