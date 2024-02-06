import { IconEye, IconEyeClosed } from '@tabler/icons-react'
import { InputHTMLAttributes, forwardRef, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { ButtonOutline } from '../../buttons'
import { cn } from "../../services/cn"


type InputPassword = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    error?: FieldError
    value?: string | null
    onChange: (value?: string | null | undefined) => void
    autoFocus?: boolean
}

export const InputPassword = forwardRef<HTMLInputElement, InputPassword>(
    function (props, ref) {
        const [showPassword, setShowPassword] = useState(false)
        const handleClickShowPassword = () => setShowPassword((show) => !show)

        function input(value: string | undefined | null) {
            if (!value) return ""
            return value
        }

        function output(value: string) {
            if (!value) return null
            return value
        }

        return (
            <div
                className={cn(
                    "w-full grid grid-cols-[auto_min-content] gap-x-1",
                )}
            >
                <input
                    {...props}
                    type={showPassword ? "text" : "password"}
                    className={cn(
                        "h-[40px] w-full flex justify-between items-center gap-2 py-2 px-3 border border-solid rounded-sm text-base placeholder:text-neutral/50",
                        "focus:border-neutral/50 focus:shadow-inner focus:bg-neutral/5",
                        (!props.error) ? "border-neutral/25" : "border-error",
                        props.className
                    )}
                    ref={ref}
                    value={input(props.value)}
                    onChange={(e) => props.onChange(output(e.currentTarget.value))}
                    autoFocus={props.autoFocus}
                />
                <ButtonOutline
                    icon={showPassword ? <IconEye /> : <IconEyeClosed />}
                    onClick={handleClickShowPassword}
                    className="border-neutral/25"
                />
            </div>
        )
    }
)
