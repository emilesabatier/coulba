import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { IMask, IMaskInput } from 'react-imask'
import { cn } from "../../services/cn"


type InputPrice = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
    error?: FieldError
    defaultValue?: string | undefined | null
    value?: number | string | undefined | null
    onChange: (value: number | string | undefined) => void
}

export const InputPrice = forwardRef<HTMLInputElement, InputPrice>(
    function (props, ref) {

        function input(value: number | string | undefined | null) {
            if (value === null || value === undefined) return undefined
            return value?.toString()
        }

        function output(value: number | string | undefined) {
            if (value === undefined) return value
            return value
        }

        return (
            <div className={cn(
                "h-[40px] w-full flex justify-start items-stretch border border-neutral/20 rounded-sm",
                (!props.error) ? "" : "border-error",
                props.className
            )}>
                <IMaskInput
                    inputRef={ref}
                    mask="n"
                    blocks={{
                        n: {
                            mask: IMask.MaskedNumber,
                            from: 0,
                            scale: 2
                        }
                    }}
                    autofix={false}
                    lazy={false}
                    overwrite={true}
                    eager="append"
                    unmask={"typed"}
                    // onClick={(event) => { event.currentTarget.select() }}
                    // onFocus={(event) => { event.currentTarget.setSelectionRange(-1, -1) }}
                    onAccept={(value) => props.onChange(output(Number(value)))}
                    value={input(props.value)}
                    className={cn(
                        "rounded-[inherit] w-full text-base placeholder:text-neutral/25 p-2",
                        "focus:shadow-inner focus:bg-neutral/5",
                        "overflow-hidden whitespace-nowrap text-ellipsis"
                    )}
                    inputMode="decimal"
                />
            </div>

        )
    }
)
