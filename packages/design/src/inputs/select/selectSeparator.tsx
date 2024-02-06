import * as SelectPrimitive from "@radix-ui/react-select"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { cn } from "../../services/cn"


export const SelectSeparator = forwardRef<
    ElementRef<typeof SelectPrimitive.Separator>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
    <SelectPrimitive.Separator
        ref={ref}
        className={cn("-mx-1 my-1 h-px bg-muted", className)}
        {...props}
    />
))