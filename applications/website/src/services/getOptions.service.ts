export function getOptions<T extends { [key: string]: string }>(object: T) {
    let key: keyof typeof object
    const options: {
        key: typeof key
        label: string
    }[] = []
    for (key in object) {
        options.push({
            key: key,
            label: object[key]
        })
    }
    return options
}
