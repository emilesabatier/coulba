"use client"

import * as SwitchPrimitives from "@radix-ui/react-switch"
import * as React from "react"
import { cn } from "../../services/cn"


export const Switch = React.forwardRef<
    React.ElementRef<typeof SwitchPrimitives.Root>,
    React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
    <SwitchPrimitives.Root
        className={cn(
            "peer inline-flex h-6 w-10 shrink-0 cursor-pointer items-center rounded-full border border-neutral/25 transition-colors disabled:cursor-not-allowed disabled:opacity-50 bg-white data-[state=checked]:bg-primary/10 data-[state=checked]:border-primary",
            "focus:border-neutral/50 focus:shadow-inner focus:bg-neutral/5",
            className
        )}
        {...props}
        ref={ref}
    >
        <SwitchPrimitives.Thumb
            className={cn(
                "pointer-events-none block h-4 w-4 rounded-full data-[state=checked]:bg-primary data-[state=unchecked]:bg-neutral/50 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-[18px] data-[state=unchecked]:translate-x-1"
            )}
        />
    </SwitchPrimitives.Root>
))
