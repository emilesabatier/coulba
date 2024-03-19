import * as ToastPrimitives from "@radix-ui/react-toast"
import { IconAlertHexagonFilled, IconAlertTriangleFilled, IconCircleCheckFilled, IconInfoSquareFilled, IconX } from "@tabler/icons-react"
import { cva, type VariantProps } from "class-variance-authority"
import { ComponentPropsWithoutRef, ElementRef, ReactElement, forwardRef } from "react"
import { cn } from "../../services/cn"


const ToastProvider = ToastPrimitives.Provider

const ToastViewport = forwardRef<
    ElementRef<typeof ToastPrimitives.Viewport>,
    ComponentPropsWithoutRef<typeof ToastPrimitives.Viewport>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Viewport
        ref={ref}
        className={cn(
            "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse gap-1 p-4 md:top-0 md:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
            className
        )}
        {...props}
    />
))
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastIcons = {
    error: <IconAlertHexagonFilled className="text-error" />,
    success: <IconCircleCheckFilled className="text-success" />,
    warning: <IconAlertTriangleFilled className="text-warning" />,
    information: <IconInfoSquareFilled className="text-information" />
}
const toastVariants = cva(
    cn(
        "group pointer-events-auto relative flex w-full items-start justify-start space-x-4 overflow-hidden rounded-sm border-l-4 p-4 pr-6 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-left-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        "bg-white"
    ),
    {
        variants: {
            variant: {
                error: "text-error border-error",
                success: "text-success",
                warning: "text-warning",
                information: "text-information"
            },
        },
        defaultVariants: {
            variant: "information",
        },
    }
)

const Toast = forwardRef<
    ElementRef<typeof ToastPrimitives.Root>,
    ComponentPropsWithoutRef<typeof ToastPrimitives.Root> &
    VariantProps<typeof toastVariants>
>(function ({ children, ...props }, ref) {
    return (
        <ToastPrimitives.Root
            ref={ref}
            className={cn(toastVariants({ variant: props.variant }), props.className)}
            {...props}
        >
            {toastIcons[props.variant ?? "information"]}
            {children}
        </ToastPrimitives.Root>
    )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = forwardRef<
    ElementRef<typeof ToastPrimitives.Action>,
    ComponentPropsWithoutRef<typeof ToastPrimitives.Action>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Action
        ref={ref}
        className={cn(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-sm border bg-transparent px-3 text-sm font-medium transition-colors hover:bg-secondary focus:outline-none focus:ring-1 focus:ring-ring disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
            className
        )}
        {...props}
    />
))
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = forwardRef<
    ElementRef<typeof ToastPrimitives.Close>,
    ComponentPropsWithoutRef<typeof ToastPrimitives.Close>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Close
        ref={ref}
        className={cn(
            "absolute right-1 top-1 rounded-sm p-1 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-1 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            className
        )}
        toast-close=""
        {...props}
    >
        <IconX className="stroke-neutral/25" />
    </ToastPrimitives.Close>
))
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = forwardRef<
    ElementRef<typeof ToastPrimitives.Title>,
    ComponentPropsWithoutRef<typeof ToastPrimitives.Title>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Title
        ref={ref}
        className={cn("text-base [&+div]:text-xs text-inherit", className)}
        {...props}
    />
))
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = forwardRef<
    ElementRef<typeof ToastPrimitives.Description>,
    ComponentPropsWithoutRef<typeof ToastPrimitives.Description>
>(({ className, ...props }, ref) => (
    <ToastPrimitives.Description
        ref={ref}
        className={cn("text-sm text-inherit/75", className)}
        {...props}
    />
))
ToastDescription.displayName = ToastPrimitives.Description.displayName

type ToastProps = ComponentPropsWithoutRef<typeof Toast>

type ToastActionElement = ReactElement<typeof ToastAction>

export {
    Toast, ToastAction, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport, type ToastActionElement, type ToastProps
}
