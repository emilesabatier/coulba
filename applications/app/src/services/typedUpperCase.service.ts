export function typedUpperCase<T extends string>(str: T): Uppercase<T> {
    return str.toUpperCase() as Uppercase<T>
}
