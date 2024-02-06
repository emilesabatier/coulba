import { IconArrowNarrowRight } from "@tabler/icons-react"
import { InputHTMLAttributes, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { InputTime } from ".."
import { cn } from "../../services/cn"


type RangeTime = {
    start?: string | null
    end?: string | null
}

type InputTimeRange = Omit<InputHTMLAttributes<HTMLInputElement>, "defaultValue" | "value" | "onChange"> & {
    error?: FieldError
    value?: RangeTime | null
    onChange: (value: RangeTime | null) => void
}

export const InputTimeRange = forwardRef<HTMLInputElement, InputTimeRange>(
    function (props, ref) {
        return (
            <div ref={ref} className="relative w-full flex flex-row justify-start items-center gap-2" >
                <InputTime
                    {...props}
                    value={(!props.value?.start ? null : props.value.start)}
                    onChange={(newValue) => props.onChange({ start: newValue, end: (!props.value?.end ? null : props.value.end) })}
                    className={cn((!props.error) ? "" : "border-error")}
                />
                <IconArrowNarrowRight className="stroke-neutral/10 min-w-[16px]" size={16} />
                <InputTime
                    {...props}
                    value={(!props.value?.end ? null : props.value.end)}
                    onChange={(newValue) => props.onChange({ start: (!props.value?.start ? null : props.value.start), end: newValue })}
                    className={cn((!props.error) ? "" : "border-error")}
                />
            </div>
        )
    }
)
