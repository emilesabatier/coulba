
import { IconCheck, IconSelector } from "@tabler/icons-react"
import { CommandLoading } from "cmdk"
import { ComponentProps, useState } from "react"
import { FieldError } from "react-hook-form"
import { Button } from "../../buttons"
import { FormatNull } from "../../formats"
import { CircularLoader, Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "../../layouts"
import { Popover, PopoverContent, PopoverTrigger } from "../../overlays/popover/popover"
import { cn } from "../../services/cn"



export type Option = {
    key: string
    label: string
}
type InputCombobox = {
    error?: FieldError
    placeholder?: string
    value?: string | null
    defaultValue?: string | null
    onChange: (value?: string | null) => void
    options: Option[]
    loading?: boolean
    // format: (data: T) => string
    isDisabled?: boolean
    autoFocus?: boolean
    className?: ComponentProps<'div'>['className']
    disallowEmpty?: boolean
}

export function InputCombobox(props: InputCombobox) {
    const [open, setOpen] = useState(false)
    const currentOption = props.options?.find(x => (x.key === (props.value ?? props.defaultValue)))

    function output(value?: string | null) {
        if (!value) return null
        return value
    }

    return (
        <Popover open={open} onOpenChange={setOpen} modal>
            <PopoverTrigger asChild>
                <Button
                    role="combobox"
                    onClick={() => {
                        if (props.isDisabled) return
                        setOpen(!open)
                    }}
                    data-open={open}
                    className={cn(
                        "w-full group",
                        props.isDisabled ? "cursor-not-allowed" : "",
                        props.className
                    )}
                    autoFocus={props.autoFocus}
                    disabled={props.isDisabled}
                >
                    <div className={cn(
                        "h-[40px] w-full flex justify-between items-center gap-2 p-2 border rounded-sm text-base placeholder:text-neutral/25",
                        "group-focus:shadow-inner group-focus:bg-neutral/5",
                        "group-data-[state=open]:bg-neutral/5 group-data-[state=open]:shadow-inner",
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
                        <IconSelector className="h-4 w-4 shrink-0 opacity-50" />
                    </div>
                </Button>
            </PopoverTrigger>
            {
                !open ? null : (
                    <PopoverContent align="start">
                        <Command
                            className={cn(
                                "w-full"
                            )}
                            filter={(value, search) => {
                                const option = props.options?.find(x => x.key === value)?.label.toLowerCase()
                                if (option?.includes(search.toLowerCase())) return 1
                                return 0
                            }}
                        >
                            <CommandInput />
                            {props.loading ? <CommandLoading><CircularLoader /></CommandLoading> : null}
                            <CommandList className='max-h-64 overflow-auto flex flex-col justify-start items-stretch'>
                                <CommandEmpty className="relative h-[40px] flex justify-start items-center p-3 cursor-default select-none outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50" >
                                    <FormatNull text="Aucun résultat" />
                                </CommandEmpty>
                                {props.options.length > 0 ? null : (
                                    <div className="relative h-[40px] flex justify-start items-center p-3 cursor-default select-none outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50" >
                                        <FormatNull text="Aucun résultat" />
                                    </div>
                                )}
                                {
                                    props.options.map((option) => {
                                        // if (option.key === (props.value ?? props.defaultValue)) return null
                                        return (
                                            <CommandItem
                                                key={option.key}
                                                value={option.key}
                                                onSelect={(currentValue) => {
                                                    if (props.isDisabled) return
                                                    props.onChange(output((!props.disallowEmpty && currentValue === props.value) ? undefined : currentValue))
                                                    setOpen(false)
                                                }}
                                                className={cn(
                                                    "h-[40px] flex justify-between items-center overflow-hidden gap-2 p-2",
                                                    currentOption?.key === option.key ? "bg-neutral/5" : "bg-none hover:bg-neutral/5"
                                                )}
                                            >
                                                <span
                                                    className={cn(
                                                        currentOption?.key === option.key ? "text-neutral" : "text-neutral"
                                                    )}
                                                >
                                                    {option.label}
                                                </span>
                                                <IconCheck
                                                    className={cn(
                                                        "h-4 w-4 stroke-neutral",
                                                        currentOption?.key === option.key ? "opacity-100" : "opacity-0"
                                                    )}
                                                />
                                            </CommandItem>
                                        )
                                    })
                                }
                            </CommandList>
                        </Command>
                    </PopoverContent>
                )}
        </Popover>
    )
}
