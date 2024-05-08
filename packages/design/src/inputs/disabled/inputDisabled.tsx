import { InputHTMLAttributes, useRef } from 'react'
import { FieldError } from 'react-hook-form'
import { cn } from '../../services'


type InputDisabled = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    error?: FieldError
    value?: string | null
    onChange?: (value?: string | null | undefined) => void
}

export function InputDisabled(props: InputDisabled) {
    let ref = useRef(null)
    return (
        <input
            ref={ref}
            className={cn(
                "relative w-full flex flex-row justify-between items-center gap-2 p-2 border border-solid rounded-sm bg-neutral text-base",
                (!props.error) ? "border-neutral/10" : "border-error"
            )}
            disabled
        />
    )
}
