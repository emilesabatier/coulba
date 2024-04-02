import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { IMask, IMaskInput } from 'react-imask'
import { cn } from "../../services/cn"


type InputDate = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
    error?: FieldError
    defaultValue?: string | undefined | null
    value?: string | undefined | null
    onChange: (value: string | undefined) => void
}

export const InputDate = forwardRef<HTMLInputElement, InputDate>(
    function (props, ref) {

        function isDateValid(date: string) {
            return !isNaN(new Date(date).getTime())
        }

        function input(value: string | undefined | null) {
            if (!value) return undefined
            if (!isDateValid(value)) return undefined

            let date = new Date(value)
            let day = String(date.getDate())
            let month = String(date.getMonth() + 1)
            let year = String(date.getFullYear())

            if (date.getDate() < 10) day = "0" + day
            if ((date.getMonth() + 1) < 10) month = "0" + month
            return [day, month, year].join(' / ')
        }

        function output(value: string | undefined) {
            if (!value) return undefined
            const yearMonthDay = value.split(' / ')
            return new Date(Number(yearMonthDay[2]), Number(yearMonthDay[1]) - 1, Number(yearMonthDay[0]), 12, 0, 0)?.toISOString()
        }

        return (
            <IMaskInput
                inputRef={ref}
                mask="d{ / }`m{ / }`Y"
                blocks={{
                    d: {
                        mask: IMask.MaskedRange,
                        from: 1,
                        to: 31,
                        maxLength: 2,
                        placeholderChar: "J"
                    },
                    m: {
                        mask: IMask.MaskedRange,
                        from: 1,
                        to: 12,
                        maxLength: 2,
                        placeholderChar: "M"
                    },
                    Y: {
                        mask: IMask.MaskedRange,
                        from: 1930,
                        to: 2100,
                        maxLength: 4,
                        placeholderChar: "Y"
                    }
                }}
                autofix={false}
                lazy={false}
                overwrite={true}
                eager="append"
                unmask="typed"
                placeholder={"JJ / MM / YYYY"}
                // onClick={(event) => { event.currentTarget.select() }}
                // onFocus={(event) => { event.currentTarget.setSelectionRange(-1, -1) }}
                onComplete={(value) => props.onChange(output(value))}
                value={input(props.value)}
                className={cn(
                    "relative w-full flex flex-row justify-start items-center p-2 border border-solid rounded-sm",
                    "focus:border-neutral/20 focus:shadow-inner focus:bg-neutral/5",
                    (!props.error) ? "border-neutral/20" : "border-error",
                    props.className
                )}
                inputMode="decimal"
            />
        )
    }
)
