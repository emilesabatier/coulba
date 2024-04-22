import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { IMask, IMaskInput } from 'react-imask'
import { cn } from "../../services/cn"


type InputCardExpirationMonth = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    error?: FieldError
    value: string | undefined | null
    onChange: (value: string | undefined | null) => void
}

export const InputCardExpirationMonth = forwardRef<HTMLInputElement, InputCardExpirationMonth>(
    (props, ref) => {

        function input(value: string | undefined | null) {
            if (value === null || value === undefined) return undefined
            return value
        }

        function output(value: string | undefined) {
            return value
        }

        return (
            <IMaskInput
                ref={ref}
                mask="MM"
                blocks={{
                    MM: {
                        mask: IMask.MaskedRange,
                        from: 1,
                        to: 12,
                    }
                }}
                placeholder="MM"
                autofix={"pad"}
                lazy={true}
                overwrite={true}
                eager="append"
                unmask="typed"
                onAccept={(value) => props.onChange(output(value))}
                value={input(props.value)}
                className={cn(
                    "w-full h-[40px] flex justify-start items-stretch gap-1 p-2 border border-neutral/20 rounded-sm placeholder:text-neutral/10",
                    "focus-within:border-neutral/50 focus-within:shadow-inner focus-within:bg-neutral/5",
                    (!props.error) ? "border-neutral/20" : "border-error"
                )}
                inputMode="decimal"
            />
        )
    }
)
