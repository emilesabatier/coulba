import * as SelectPrimitive from "@radix-ui/react-select"
import { IconCheck } from "@tabler/icons-react"
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from "react"
import { cn } from "../../services/cn"


export const SelectItem = forwardRef<
    ElementRef<typeof SelectPrimitive.Item>,
    ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
    <SelectPrimitive.Item
        {...props}
        ref={ref}
        className={cn(
            "h-[40px] relative flex w-full cursor-default select-none items-center py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:bg-primary/5 hover:bg-neutral/5",
            className
        )}
    >
        <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
        <span className="absolute right-2 flex h-3.5 w-3.5 items-center justify-center">
            <SelectPrimitive.ItemIndicator>
                <IconCheck className="h-4 w-4 stroke-primary" />
            </SelectPrimitive.ItemIndicator>
        </span>
    </SelectPrimitive.Item>
))
