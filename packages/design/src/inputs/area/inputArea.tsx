import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { cn } from "../../services/cn"


type InputArea = Omit<InputHTMLAttributes<HTMLTextAreaElement>, "value" | "onChange"> & {
    error?: FieldError
    value?: string | null
    onChange: (value?: string | null | undefined) => void
}

export const InputArea = forwardRef<HTMLTextAreaElement, InputArea>(
    function (props, ref) {

        function input(value: string | undefined | null) {
            if (!value) return ""
            return value
        }

        function output(value: string) {
            if (!value) return null
            return value
        }

        return (
            <textarea
                {...props}
                className={cn(
                    "min-h-[5rem] h-20 w-full flex justify-between items-center gap-2 py-2 px-3 border rounded-sm text-base placeholder:text-neutral/25",
                    "focus:border-neutral/20 focus:shadow-inner focus:bg-neutral/5",
                    (!props.error) ? "border-neutral/20" : "border-error",
                    props.className
                )}
                ref={ref}
                value={input(props.value)}
                onChange={(e) => {
                    if (!props.onChange) return
                    props?.onChange(output(e.currentTarget.value))
                }}
            />
        )
    }
)
