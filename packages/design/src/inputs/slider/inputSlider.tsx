import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu"
import { ElementRef, HTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { Slider } from "./slider"


type InputSlider = Omit<HTMLAttributes<HTMLDivElement>, "value" | "onChange"> & {
    error?: FieldError
    defaultValue?: number | null
    min?: number
    max?: number
    value?: number
    onChange: (value?: number | null) => void
    autoFocus?: boolean
    isDisabled?: boolean
}

export const InputSlider = forwardRef<ElementRef<typeof DropdownMenuTrigger>, InputSlider>(
    function (props, ref) {
        return (
            <Slider
                ref={ref}
                value={!props.value ? undefined : [props.value]}
                onValueChange={(value) => props.onChange(value[0])}
                min={props.min}
                max={props.max}
                step={1}
            />
        )
    }
)
