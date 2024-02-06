import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { IMask, IMaskInput } from 'react-imask'
import { cn } from "../../services/cn"


type InputDuration = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
    error?: FieldError
    defaultValue?: number | undefined | null
    value?: number | undefined | null
    onChange: (value: number | undefined) => void
}

export const InputDuration = forwardRef<HTMLInputElement, InputDuration>(
    function (props, ref) {

        function input(value: number | undefined | null) {
            if (!value) return undefined
            const hours = Math.floor(value / 60)
            const minutes = value % 60
            return `${hours < 10 ? `0${hours}` : hours.toString()} : ${minutes < 10 ? `0${minutes}` : minutes.toString()}`
        }

        function output(value: string | undefined | null) {
            if (!value) return undefined
            const hours = Number(value.split(" : ").at(0))
            const minutes = Number(value.split(" : ").at(1))
            return hours * 60 + minutes
        }

        return (
            <IMaskInput
                inputRef={ref}
                mask="h{ : }m"
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
                unmask="typed"
                placeholder={"hh : mm"}
                onAccept={(value: string) => props.onChange(output(value))}
                value={input(props.value)}
                defaultValue={input(props.defaultValue)}
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
