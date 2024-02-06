import { forwardRef, useId } from "react"
import { cn } from "../services/cn"
import { FormItemContext } from "./formItemContext"


export const FormItem = forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(function (props, ref) {
    const id = useId()

    return (
        <FormItemContext.Provider value={{ id }}>
            <div
                {...props}
                ref={ref}
                className={cn("w-full flex flex-col justify-start items-stretch gap-1", props.className)}
            />
        </FormItemContext.Provider>
    )
})
