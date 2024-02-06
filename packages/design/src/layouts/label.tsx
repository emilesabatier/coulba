import * as LabelPrimitive from "@radix-ui/react-label"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { cn } from "../services/cn"


const Label = forwardRef<
    ElementRef<typeof LabelPrimitive.Root>,
    ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => (
    <LabelPrimitive.Root
        {...props}
        ref={ref}
        className={cn("flex-1 inline-flex flex-row justify-between items-start gap-2", className)}
    />
))