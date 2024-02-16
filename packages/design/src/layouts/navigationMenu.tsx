

import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu"
import { IconChevronDown } from "@tabler/icons-react"
import * as React from "react"
import { cn } from "../services"


const NavigationMenu = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ children, className, ...props }, ref) => (
    <NavigationMenuPrimitive.Root
        orientation="vertical"
        ref={ref}
        className={cn(
            "relative flex rounded-sm p-1 border-3 border-white text-muted-foreground gap-1",
            className
        )}
        {...props}
    >
        {children}
        <NavigationMenuViewport />
    </NavigationMenuPrimitive.Root>
))


const NavigationMenuList = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.List>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.List
        ref={ref}
        className={cn(
            "flex flex-col h-auto items-center justify-start rounded-sm bg-muted p-1 text-muted-foreground",
            className
        )}
        {...props}
    />
))


const NavigationMenuTrigger = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Trigger
        ref={ref}
        className={cn(
            "flex items-center justify-start whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
            "group",
            className
        )}
        {...props}
    >
        {props.children}
        <IconChevronDown className="ml-auto text-white/90 group-data-[state=open]:-rotate-90" />
    </NavigationMenuPrimitive.Trigger>
))


const NavigationMenuContent = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
    <NavigationMenuPrimitive.Content
        ref={ref}
        className={cn(
            "px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
            className
        )}
        {...props}
    />
))


const NavigationMenuViewport = React.forwardRef<
    React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
    React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
    <div className={cn("absolute left-0 top-0 flex justify-center")}>
        <NavigationMenuPrimitive.Viewport
            className={cn(
                "origin-top-center relative h-full w-full overflow-hidden rounded-sm border border-neutral/25 bg-white shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-full",
                className
            )}
            ref={ref}
            {...props}
        />
    </div>
))


const NavigationMenuLink = NavigationMenuPrimitive.Link

const NavigationMenuItem = NavigationMenuPrimitive.Item
// React.forwardRef<
//     React.ElementRef<typeof NavigationMenuPrimitive.Item>,
//     React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Item>
// >(({ className, ...props }, ref) => (
//     <div className={cn("absolute left-0 top-0 flex justify-center")}>
//         <NavigationMenuPrimitive.Item
//             className={cn(
//                 className
//             )}
//             ref={ref}
//             {...props}
//         >
//             {props.children}
//         </NavigationMenuPrimitive.Item>
//     </div>
// ))


export { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport }
