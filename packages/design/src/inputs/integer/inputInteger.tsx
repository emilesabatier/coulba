import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { IMask, IMaskInput } from 'react-imask'
import { cn } from "../../services/cn"


type InputInteger = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
    error?: FieldError
    defaultValue?: number | undefined | null
    value?: number | undefined | null
    onChange: (value: number | undefined) => void
}

export const InputInteger = forwardRef<HTMLInputElement, InputInteger>(
    function (props, ref) {

        function input(value: number | undefined | null) {
            if (value === null || value === undefined) return undefined
            return value?.toString()
        }

        function output(value: string | undefined) {
            if (value === undefined) return value
            return Number(value)
        }

        return (
            <IMaskInput
                inputRef={ref}
                mask="n"
                blocks={{
                    n: {
                        mask: IMask.MaskedNumber,
                        from: 0,
                        scale: 0
                    }
                }}
                autofix={false}
                lazy={false}
                overwrite={true}
                eager="append"
                unmask={"typed"}
                placeholder={undefined}
                // onClick={(event) => { event.currentTarget.select() }}
                // onFocus={(event) => { event.currentTarget.setSelectionRange(-1, -1) }}
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
