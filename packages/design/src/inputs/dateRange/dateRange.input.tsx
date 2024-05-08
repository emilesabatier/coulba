import { IconArrowNarrowRight } from '@tabler/icons-react'
import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { InputDate } from '..'
import { cn } from "../../services/cn"


export type DateRange = {
    start?: string | null
    end?: string | null
}

type InputDateRange = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
    error?: FieldError
    value?: DateRange | null
    onChange: (value: DateRange | null) => void
}

export const InputDateRange = forwardRef<HTMLInputElement, InputDateRange>(
    function (props, ref) {
        return (
            <div ref={ref} className="relative w-full flex flex-row justify-start items-center gap-2" >
                <InputDate
                    {...props}
                    value={(!props.value?.start ? null : props.value.start)}
                    onChange={(newValue) => props.onChange({ start: newValue, end: (!props.value?.end ? null : props.value.end) })}
                    className={cn((!props.error) ? "" : "border-error")}
                />
                <IconArrowNarrowRight className="stroke-neutral/10" size={16} />
                <InputDate
                    {...props}
                    value={(!props.value?.end ? null : props.value.end)}
                    onChange={(newValue) => props.onChange({ start: (!props.value?.start ? null : props.value.start), end: newValue })}
                    className={cn((!props.error) ? "" : "border-error")}
                />
            </div>
        )
    }
)
