import * as PopoverPrimitive from "@radix-ui/react-popover"
import * as React from "react"
import { cn } from "../../services/cn"


const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
    React.ElementRef<typeof PopoverPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", side = "bottom", sideOffset = 4, ...props }, ref) => {
    return (
        <PopoverPrimitive.Portal>
            <PopoverPrimitive.Content
                {...props}
                ref={ref}
                align={align}
                side={side}
                sideOffset={sideOffset}
                // hideWhenDetached={true}
                // style={{ zIndex: 99 }}
                className={cn(
                    "z-10 rounded-md h-fit bg-white border border-neutral/20 outline-none shadow-md",
                    "min-w-[var(--radix-popover-trigger-width)] w-fit max-w-[100dvw]",
                    // "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                    className
                )}
            />
        </PopoverPrimitive.Portal>
    )
}
)
PopoverContent.displayName = PopoverPrimitive.Content.displayName

const PopoverClose = PopoverPrimitive.Close


export { Popover, PopoverClose, PopoverContent, PopoverTrigger }
