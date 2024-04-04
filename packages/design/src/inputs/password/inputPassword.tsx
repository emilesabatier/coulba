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
                <div className={cn(
                    "h-[40px] w-full flex justify-start items-stretch gap-2 border border-neutral/20 rounded-sm",
                    (!props.error) ? "" : "border-error",
                    props.className
                )}>
                    <input
                        {...props}
                        type={showPassword ? "text" : "password"}
                        className={cn(
                            "rounded-[inherit] w-full text-base placeholder:text-neutral/25 p-2",
                            "focus:shadow-inner focus:bg-neutral/5",
                            "overflow-hidden whitespace-nowrap text-ellipsis"
                        )}
                        ref={ref}
                        value={input(props.value)}
                        onChange={(e) => props.onChange(output(e.currentTarget.value))}
                        autoFocus={props.autoFocus}
                    />
                </div>
                <ButtonOutline
                    icon={showPassword ? <IconEye /> : <IconEyeClosed />}
                    onClick={handleClickShowPassword}
                    className="border-neutral/20"
                />
            </div>
        )
    }
)
