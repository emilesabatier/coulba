import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { IMask, IMaskInput } from 'react-imask'
import { cn } from "../../services/cn"


type InputTime = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
    error?: FieldError
    defaultValue?: string | undefined | null
    value?: string | undefined | null
    onChange: (value: string | undefined) => void
}

export const InputTime = forwardRef<HTMLInputElement, InputTime>(
    function (props, ref) {

        function input(value: string | undefined | null) {
            if (!value) return undefined
            return value
        }

        function output(value: string | undefined | null) {
            if (!value) return undefined
            return value
        }

        return (
            <IMaskInput
                inputRef={ref}
                mask="h{ : }`m"
                blocks={{
                    h: {
                        mask: IMask.MaskedRange,
                        from: 0,
                        to: 23,
                        maxLength: 2,
                        placeholderChar: "h"
                    },
                    m: {
                        mask: IMask.MaskedRange,
                        from: 0,
                        to: 59,
                        maxLength: 2,
                        placeholderChar: "m"
                    }
                }}
                autofix={false}
                lazy={false}
                overwrite={true}
                eager="append"
                unmask={"typed"}
                placeholder={"hh : mm"}
                onAccept={(value: string) => props.onChange(output(value))}
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
