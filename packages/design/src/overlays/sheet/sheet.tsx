"use client"

import * as SheetPrimitive from "@radix-ui/react-dialog"
import { IconX } from "@tabler/icons-react"
import { cva, type VariantProps } from "class-variance-authority"
import { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef } from "react"
import { ButtonGhost } from "../../buttons"
import { cn } from "../../services/cn"


const Sheet = SheetPrimitive.Root

const SheetTrigger = SheetPrimitive.Trigger

const SheetClose = SheetPrimitive.Close

const SheetPortal = ({
    ...props
}: SheetPrimitive.DialogPortalProps) => (
    <SheetPrimitive.Portal {...props} />
)
SheetPortal.displayName = SheetPrimitive.Portal.displayName

const SheetOverlay = forwardRef<
    ElementRef<typeof SheetPrimitive.Overlay>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Overlay
        className={cn(
            "fixed inset-0 z-50 bg-neutral/10",// backdrop-blur-sm",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
        ref={ref}
    />
))
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName

const sheetVariants = cva(
    cn(
        "fixed z-50 max-h-full overflow-y-auto grid grid-rows-[min-content_auto] gap-4 bg-white p-4 md:p-8 border-solid border-neutral/25",// shadow-lg",
        "transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500"
    ),
    {
        variants: {
            side: {
                top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
                bottom: "inset-x-0 bottom-0 h-full border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
                left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
                right: cn(
                    "inset-y-0 right-0 h-full w-full md:min-w-[768px] md:max-w-[768px] border-l",
                    "data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right"
                ),
            },
        },
        defaultVariants: {
            side: "right",
        },
    }
)

interface SheetContentProps extends ComponentPropsWithoutRef<typeof SheetPrimitive.Content>, VariantProps<typeof sheetVariants> { }

const SheetContent = forwardRef<
    ElementRef<typeof SheetPrimitive.Content>,
    SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
    <SheetPortal>
        <SheetOverlay>
            <SheetPrimitive.Content
                ref={ref}
                className={cn(sheetVariants({ side }), className)}
                {...props}
            >
                {children}
            </SheetPrimitive.Content>
        </SheetOverlay>
    </SheetPortal>
))
SheetContent.displayName = SheetPrimitive.Content.displayName

const SheetHeader = ({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "grid grid-cols-[auto_min-content] gap-x-2",
            className
        )}
        {...props}
    >
        <div className="flex flex-col justify-center items-stretch">
            {children}
        </div>
        <SheetPrimitive.Close asChild>
            <ButtonGhost
                icon={<IconX />}
            />
        </SheetPrimitive.Close>
    </div>
)
SheetHeader.displayName = "SheetHeader"

const SheetFooter = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
            className
        )}
        {...props}
    />
)
SheetFooter.displayName = "SheetFooter"

const SheetTitle = forwardRef<
    ElementRef<typeof SheetPrimitive.Title>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Title
        ref={ref}
        className={cn("text-lg font-semibold text-foreground", className)}
        {...props}
    />
))
SheetTitle.displayName = SheetPrimitive.Title.displayName

const SheetDescription = forwardRef<
    ElementRef<typeof SheetPrimitive.Description>,
    ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
    <SheetPrimitive.Description
        ref={ref}
        className={cn("text-sm text-neutral/50 break-all", className)}
        {...props}
    />
))
SheetDescription.displayName = SheetPrimitive.Description.displayName

export {
    Sheet, SheetClose,
    SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger
}
