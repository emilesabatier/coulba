import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { IMaskInput } from 'react-imask'
import { cn } from "../../services/cn"


type InputCardNumber = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
    error?: FieldError
    defaultValue?: string | undefined | null
    value?: string | undefined | null
    onChange: (value: string | undefined) => void
}

export const InputCardNumber = forwardRef<HTMLInputElement, InputCardNumber>(
    function (props, ref) {

        function input(value: string | undefined | null) {
            if (value === null || value === undefined) return undefined
            return value
        }

        function output(value: string | undefined) {
            return value?.replaceAll(" ", "")
        }

        return (
            <IMaskInput
                inputRef={ref}
                mask="0000`{ }0000`{ }0000`{ }0000"
                autofix={false}
                lazy={true}
                overwrite={true}
                eager="append"
                unmask="typed"
                placeholder=" "
                onAccept={(value) => props.onChange(output(value))}
                value={input(props.value)}
                className={cn(
                    "relative w-full flex flex-row justify-start items-center p-2 border border-solid rounded-sm",
                    "focus:border-neutral/50 focus:shadow-inner focus:bg-neutral/5",
                    (!props.error) ? "border-neutral/25" : "border-error",
                    props.className
                )}
                inputMode="decimal"
            />
        )
    }
)
