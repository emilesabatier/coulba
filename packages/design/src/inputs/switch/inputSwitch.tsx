

import * as SwitchPrimitives from "@radix-ui/react-switch"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { Switch } from "./switch"


export const InputSwitch = forwardRef<
    ElementRef<typeof SwitchPrimitives.Root>,
    Omit<ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, "value" | "onChange"> & { value: boolean | undefined | null, onChange: (value: boolean | undefined | null) => void }
>(function (props, ref) {

    function input(value: boolean | undefined | null) {
        if (!value) return false
        return value
    }

    function output(value: boolean) {
        return value
    }

    return (
        <Switch
            ref={ref}
            className={props.className}
            checked={input(props.value)}
            onCheckedChange={(checked) => props.onChange(output(checked))}
            autoFocus={props.autoFocus}
        />
    )
})
