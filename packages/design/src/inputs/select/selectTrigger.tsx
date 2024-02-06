import * as SelectPrimitive from "@radix-ui/react-select"
import { IconSelector } from "@tabler/icons-react"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { FieldError } from "react-hook-form"
import { cn } from "../../services/cn"


export const SelectTrigger = forwardRef<
    ElementRef<typeof SelectPrimitive.Trigger>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & { error?: FieldError }
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Trigger
        ref={ref}
        className={cn(
            "h-[40px] min-w-fit w-full flex flex-row justify-between items-center gap-2 p-2 border border-solid rounded-sm data-[placeholder]:text-neutral/50 disabled:cursor-not-allowed disabled:opacity-50",
            "focus:border-primary focus:bg-primary/5",
            (!props.error) ? "border-neutral/25" : "border-error",
            className
        )}
        {...props}
    >
        {children}
        <SelectPrimitive.Icon asChild>
            <IconSelector className="h-4 w-4 stroke-neutral/10" />
        </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
))
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName
