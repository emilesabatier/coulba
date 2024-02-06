import { ReactElement, cloneElement, useEffect, useState } from "react"


type InputDebounced<T> = {
    value: T
    initialValue?: T
    onChange: (value: T) => void
    debounce?: number
    children: ReactElement
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>


export function InputDebounced<T>(props: InputDebounced<T>) {
    const [value, setValue] = useState<T>(props.initialValue || props.value)

    useEffect(() => {
        setValue(props.initialValue || props.value)
    }, [props.initialValue, props.value])

    useEffect(() => {
        const timeout = setTimeout(() => {
            props.onChange(value)
        }, (!props.debounce) ? 200 : props.debounce)

        return () => clearTimeout(timeout)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value])

    return cloneElement(props.children, {
        value: value,
        onChange: (value: T) => setValue(value)
    })
}
