import { Slot } from "@radix-ui/react-slot"
import { ButtonHTMLAttributes, cloneElement, forwardRef, MouseEvent, ReactElement, useState } from "react"
import { cn } from "../services/cn"
import { sleep } from "../services/sleep.service"


export interface Button extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
    asChild?: boolean
    loader?: boolean
    children?: ReactElement
}

export const Button = forwardRef<HTMLButtonElement, Button>(
    function ({ asChild, ...props }, ref) {
        const [loading, setLoading] = useState(false)

        async function handleClick(e: MouseEvent<HTMLButtonElement>) {
            if (!props.onClick) return
            if (!props.loader) return props.onClick(e)

            setLoading(true)
            await Promise.all([sleep(250), props.onClick(e)])
            setLoading(false)
        }

        const Comp = !asChild ? "button" : Slot

        return (
            <Comp
                {...props}
                ref={ref}
                className={cn(
                    "flex flex-row justify-start items-center cursor-pointer disabled:cursor-not-allowed w-fit max-w-full h-fit max-h-fit select-text",
                    props.className
                )}
                onClick={handleClick}
                type={props.type ?? "button"}
                disabled={props.disabled || loading}
            >
                {
                    !props.children ? null :
                        cloneElement(props.children, {
                            ...(!props.loader ? undefined : { loading: loading }),
                            disabled: props.disabled
                        })
                }
            </Comp>
        )
    }
)
