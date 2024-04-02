import { InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form'
import { cn } from '../../services/cn'


type InputColor = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange"> & {
    error?: FieldError
    value?: string | null
    onChange: (value?: string | null | undefined) => void
}

export const InputColor = forwardRef<HTMLInputElement, InputColor>(
    function (props, ref) {

        function input(value: string | undefined | null) {
            if (!value) return undefined
            return value
        }

        function output(value: string) {
            if (!value) return null
            return value
        }

        return (
            <div
                className={cn(
                    "w-full grid grid-cols-[auto_min-content] gap-1",
                    props.className
                )}
            >
                <input
                    ref={ref}
                    type='color'
                    value={input(props.value)}
                    onChange={(e) => props.onChange(output(e.currentTarget.value))}
                    className={cn(
                        "h-[40px] w-full p-1 border rounded-sm text-base placeholder:text-neutral/25 bg-white cursor-pointer",
                        "focus:border-neutral/50 focus:shadow-outer focus:bg-neutral/5",
                        (!props.error) ? "border-neutral/20" : "border-error",
                    )}
                    inputMode="tel"
                />
                {/* <Popover>
                    <PopoverTrigger asChild>
                        {
                                !props.value ? null :
                                    <div className="w-[42px] h-[40px] p-2">
                                        <div
                                            className="w-full h-full rounded-sm"
                                            style={{
                                                backgroundColor: state.colorValue.toString("hex")
                                            }}
                                        />
                                    </div>
                            }
                        <ButtonOutline
                    icon={<IconPalette />}
                    className="border-neutral/25"
                />
                    </PopoverTrigger>
                    <PopoverContent className='w-fit'>

                    </PopoverContent>
                </Popover> */}
            </div>
        )
    }
)
