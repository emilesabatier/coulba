import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { cn } from "../../services/cn"


type InputText = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    error?: FieldError
    value?: string | null
    onChange?: (value?: string | null | undefined) => void
}

export const InputText = forwardRef<HTMLInputElement, InputText>(
    function (props, ref) {

        function input(value: string | undefined | null) {
            if (!value) return ""
            return value
        }

        function output(value: string) {
            if (!value) return null
            return value
        }

        return (
            <div className={cn(
                "h-[40px] w-full flex justify-start items-stretch gap-2 border border-neutral/20 rounded-sm",
                (!props.error) ? "" : "border-error",
                props.className
            )}>
                <input
                    {...props}
                    type="text"
                    className={cn(
                        "rounded-sm w-full text-base placeholder:text-neutral/25 p-2",
                        "overflow-hidden whitespace-nowrap text-ellipsis",
                        " focus:bg-neutral/5",
                    )}
                    ref={ref}
                    value={input(props.value)}
                    onChange={(e) => {
                        if (!props.onChange) return
                        props?.onChange(output(e.currentTarget.value))
                    }}
                />
            </div>
        )
    }
)
