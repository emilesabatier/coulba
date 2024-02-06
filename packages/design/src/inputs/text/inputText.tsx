import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { cn } from "../../services/cn"


type InputText = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    error?: FieldError
    value?: string | null
    onChange?: (value?: string | null | undefined) => void
}

export const InputText = forwardRef<HTMLInputElement, InputText>(
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
            <input
                {...props}
                type="text"
                className={cn(
                    "h-[40px] w-full flex justify-between items-center gap-2 py-2 px-3 border border-solid rounded-sm text-base placeholder:text-neutral/25",
                    "overflow-hidden whitespace-nowrap text-ellipsis",
                    "focus:border-neutral/50 focus:shadow-inner focus:bg-neutral/5",
                    (!props.error) ? "border-neutral/25" : "border-error",
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
