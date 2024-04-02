import { IconCheck, IconSelector } from "@tabler/icons-react"
import { ElementRef, HTMLAttributes, forwardRef, useState } from 'react'
import { FieldError } from 'react-hook-form'
import { Option } from ".."
import { Button } from "../../buttons"
import { Popover, PopoverContent, PopoverTrigger } from "../../overlays"
import { cn } from "../../services"


type InputSelect = Omit<HTMLAttributes<HTMLDivElement>, "value" | "onChange"> & {
    error?: FieldError
    defaultValue?: string | null
    value?: string | null
    onChange: (value?: string | null) => void
    placeholder?: string
    options: Option[]
    autoFocus?: boolean
    allowEmpty?: boolean
    isDisabled?: boolean
}

export const InputSelect = forwardRef<ElementRef<typeof Button>, InputSelect>(
    function (props, ref) {
        const [open, setOpen] = useState(false)

        function input(value: string | null | undefined) {
            return value
        }

        function output(value: string) {
            if (!value) return null
            return value
        }

        const currentOption = props.options.find(x => x.key === input(props.value ?? props.defaultValue))

        return (
            <Popover open={open} onOpenChange={setOpen} modal>
                <PopoverTrigger asChild>
                    <Button
                        ref={ref}
                        autoFocus={props.autoFocus}
                        onClick={() => {
                            if (props.isDisabled) return
                            setOpen(!open)
                        }}
                        className={cn(
                            "w-full group",
                            props.isDisabled ? "cursor-not-allowed" : "",
                            props.className
                        )}
                        data-open={open}
                    >
                        <div className={cn(
                            "h-[40px] min-w-fit w-full grid grid-cols-[auto_min-content] items-center gap-x-2 py-2 px-3 border border-solid rounded-sm text-base placeholder:text-neutral/25",
                            "group-focus:border-neutral/50 group-focus:shadow-outer group-focus:bg-neutral/5",
                            "hover:bg-neutral/5",
                            "group-data-[state=open]:border-neutral/50 group-data-[state=open]:bg-neutral/5 group-data-[state=open]:shadow-outer",
                            (!props.error) ? "border-neutral/20" : "border-error",
                            props.isDisabled ? "bg-background" : ""
                        )}>
                            {
                                !currentOption ? (
                                    <span className="max-w-full text-left text-neutral/50 whitespace-nowrap overflow-hidden text-ellipsis">
                                        {props.placeholder ?? "Aucune option sélectionnée"}
                                    </span>
                                ) : (
                                    <span className="max-w-full text-left whitespace-nowrap overflow-hidden text-ellipsis">{currentOption.label}</span>
                                )
                            }
                            <IconSelector size={16} className="stroke-neutral/50" />
                        </div>
                    </Button>
                </PopoverTrigger>
                {
                    !open ? null : (
                        <PopoverContent
                            align="start"
                        >
                            {
                                props.options?.map((option) => (
                                    <div
                                        key={option.key}
                                        onClick={() => {
                                            if (props.isDisabled) return
                                            if (props.allowEmpty && (option.key === props.value)) {
                                                props.onChange(null)
                                                setOpen(false)
                                                return
                                            }
                                            props.onChange(output(option.key))
                                            setOpen(false)
                                        }}
                                        className={cn(
                                            "h-[40px] relative flex justify-between overflow-hidden w-full cursor-default select-none items-center p-3 gap-3 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
                                            option.key === props.value ? "bg-primary/10" : "bg-none hover:bg-neutral/5"
                                        )}
                                    >
                                        <span
                                            className={cn(
                                                option.key === props.value ? "text-primary" : ""
                                            )}
                                        >
                                            {option.label}
                                        </span>
                                        <IconCheck
                                            className={cn(
                                                "h-4 w-4 stroke-primary",
                                                currentOption?.key === option.key ? "opacity-100" : "opacity-0"
                                            )}
                                        />
                                    </div>
                                ))
                            }
                        </PopoverContent>
                    )}
            </Popover>
        )
    }
)
