import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { cn } from '../../services'
import { Editor } from './editor'


type InputEditor = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    error?: FieldError
    value?: string | null
    defaultValue?: string | null
    onChange?: (value?: string | null | undefined) => void
}

export const InputEditor = forwardRef<HTMLInputElement, InputEditor>(
    ({ className, type, ...props }, _ref) => {

        function input(value: string | undefined | null) {
            if (!value) return undefined
            return value
        }

        function output(value: string) {
            if (!value) return null
            return value
        }

        return (
            <div
                className={cn(
                    "w-full h-fit flex justify-between items-center gap-2",
                    (!props.error) ? "border-neutral/20" : "border-error",
                    className
                )}
            >
                <Editor
                    // ref={ref}
                    value={input(props.value)}
                    defaultValue={input(props.defaultValue)}
                    onChange={(newValue) => {
                        if (!props.onChange) return
                        props.onChange(output(newValue))
                    }}
                />
            </div>
        )
    }
)
