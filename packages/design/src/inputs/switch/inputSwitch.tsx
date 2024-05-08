

import * as SwitchPrimitives from "@radix-ui/react-switch"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { Switch } from "./switch"


export const InputSwitch = forwardRef<
    ElementRef<typeof SwitchPrimitives.Root>,
    Omit<ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>, "value" | "onChange"> & { value: boolean | undefined | null, onChange: (value: boolean | undefined | null) => void }
>(function (props, ref) {

    return (
        <Switch
            ref={ref}
            className={props.className}
            checked={!props.value ? false : props.value}
            onCheckedChange={(checked) => props.onChange(checked)}
            autoFocus={props.autoFocus}
        />
    )
})
