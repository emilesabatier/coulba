
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { IconX } from "@tabler/icons-react"
import { ComponentPropsWithoutRef, ElementRef, HTMLAttributes, forwardRef } from "react"
import { ButtonGhost } from "../../buttons"
import { cn } from "../../services/cn"


const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogOverlay = forwardRef<
    ElementRef<typeof DialogPrimitive.Overlay>,
    ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Overlay
        ref={ref}
        // style={{ zIndex: 100 }}
        className={cn(
            "fixed z-10 inset-0 w-full h-full flex justify-end items-center overflow-auto p-3 md:p-8 bg-neutral/25 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            className
        )}
        {...props}
    />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = forwardRef<
    ElementRef<typeof DialogPrimitive.Content>,
    ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(function (props, ref) {
    return (
        <DialogPortal>
            <DialogOverlay>
                <DialogPrimitive.Content
                    {...props}
                    ref={ref}
                    className={cn(
                        "min-w-full md:min-w-md w-full max-w-full md:max-w-md h-full md:max-h-full overflow-auto bg-background shadow-lg rounded-sm flex flex-col justify-start items-stretch",
                        "duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                        props.className
                    )}
                >
                    {props.children}
                </DialogPrimitive.Content>
            </DialogOverlay>
        </DialogPortal>
    )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
    className,
    children,
    ...props
}: HTMLAttributes<HTMLDivElement>) => (
    <div
        {...props}
        className={cn(
            "grid grid-cols-[auto_min-content] gap-x-2 items-center bg-white border-b border-neutral/10 p-2 md:p-3",
            className
        )}
    >
        <div className="flex flex-col justify-center items-stretch px-2 md:px-0">
            {children}
        </div>
        <DialogPrimitive.Close asChild>
            <ButtonGhost
                icon={<IconX />}
            />
        </DialogPrimitive.Close>
    </div>
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
    className,
    ...props
}: HTMLAttributes<HTMLDivElement>) => (
    <div
        className={cn(
            "mt-auto p-2 md:p-3 bg-white border-t border-neutral/10 flex justify-end items-center gap-1 md:gap-2",
            className
        )}
        {...props}
    />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = forwardRef<
    ElementRef<typeof DialogPrimitive.Title>,
    ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Title
        ref={ref}
        className={cn(
            "text-xl overflow-hidden whitespace-nowrap text-ellipsis leading-none p-2",
            className
        )}
        {...props}
    />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = forwardRef<
    ElementRef<typeof DialogPrimitive.Description>,
    ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
    <DialogPrimitive.Description
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
    />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
    Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger
}

