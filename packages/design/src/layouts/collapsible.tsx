

import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { forwardRef } from "react"
import { cn } from "../services"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = CollapsiblePrimitive.CollapsibleTrigger

const CollapsibleContent = forwardRef<
    React.ElementRef<typeof CollapsiblePrimitive.CollapsibleContent>,
    React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.CollapsibleContent>
>(({ className, ...props }, ref) => (
    <CollapsiblePrimitive.CollapsibleContent
        ref={ref}
        className={cn(
            "",
            className
        )}
        {...props}
    />
))

export { Collapsible, CollapsibleContent, CollapsibleTrigger }
