
import { IconCheck, IconSelector } from "@tabler/icons-react"
import { useVirtualizer } from "@tanstack/react-virtual"
import { CommandGroup, CommandLoading } from "cmdk"
import { ComponentProps, useEffect, useRef, useState } from "react"
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
    isLoading?: boolean
    isDisabled?: boolean
    autoFocus?: boolean
    className?: ComponentProps<'div'>['className']
    disallowEmpty?: boolean
}

export function InputCombobox(props: InputCombobox) {
    const [open, setOpen] = useState(false)
    const selectedOption = props.options?.find(x => (x.key === (props.value ?? props.defaultValue)))
    const [filteredOptions, setFilteredOptions] = useState(props.options)

    useEffect(() => {
        setFilteredOptions(props.options)
    }, [props.options])

    const parentRef = useRef(null)

    const virtualizer = useVirtualizer({
        count: filteredOptions.length,
        getScrollElement: () => parentRef.current,
        estimateSize: () => 35,
        overscan: 5
    })

    const virtualOptions = virtualizer.getVirtualItems()

    const handleSearch = (search: string) => {
        setFilteredOptions(
            props.options.filter((option) =>
                option.label.toLowerCase().includes(search.toLowerCase() ?? [])
            )
        )
    }

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
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
                            !selectedOption ? (
                                <span className="max-w-full text-left text-neutral/50 whitespace-nowrap overflow-hidden text-ellipsis">
                                    {props.placeholder ?? "Aucune option sélectionnée"}
                                </span>
                            ) : (
                                <span className="max-w-full text-left whitespace-nowrap overflow-hidden text-ellipsis">{selectedOption.label}</span>
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
                            shouldFilter={false}
                            className="w-full"
                        >
                            <CommandInput onValueChange={handleSearch} placeholder={props.placeholder} />
                            <CommandList className='h-full overflow-auto flex flex-col justify-start items-stretch'>

                                {props.isLoading ? <CommandLoading><CircularLoader /></CommandLoading> : null}

                                <CommandEmpty className="relative h-[40px] flex justify-start items-center p-3 cursor-default select-none outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50" >
                                    <FormatNull text="Aucun résultat" />
                                </CommandEmpty>

                                {/* {props.options.length > 0 ? null : (
                                    <div className="relative h-[40px] flex justify-start items-center p-3 cursor-default select-none outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50" >
                                        <FormatNull text="Aucun résultat" />
                                    </div>
                                )} */}

                                <CommandGroup
                                    ref={parentRef}
                                    style={{
                                        height: "100%",
                                        width: "100%",
                                        overflow: "auto",
                                    }}
                                    className="max-h-64"
                                >
                                    <div
                                        style={{
                                            height: `${virtualizer.getTotalSize()}px`,
                                            width: "100%",
                                            position: "relative",
                                        }}
                                    >
                                        {virtualOptions.map((virtualOption) => {
                                            const option = filteredOptions[virtualOption.index]
                                            if (!option) return null
                                            return (
                                                <CommandItem
                                                    style={{
                                                        position: "absolute",
                                                        top: 0,
                                                        left: 0,
                                                        width: "100%",
                                                        height: `${virtualOption.size}px`,
                                                        transform: `translateY(${virtualOption.start}px)`,
                                                    }}
                                                    key={option.key}
                                                    value={option.key}
                                                    onSelect={(currentValue) => {
                                                        if (props.isDisabled) return
                                                        const newValue = (!props.disallowEmpty && currentValue === props.value) ? null : currentValue
                                                        props.onChange(newValue)
                                                        setOpen(false)
                                                    }}
                                                    className={cn(
                                                        "h-[40px] flex justify-between items-center overflow-hidden gap-2 p-2",
                                                        selectedOption?.key === option.key ? "bg-neutral/5" : "bg-none hover:bg-neutral/5"
                                                    )}
                                                >
                                                    <span
                                                        className={cn(
                                                            "overflow-hidden whitespace-nowrap text-ellipsis",
                                                            selectedOption?.key === option.key ? "text-neutral" : "text-neutral"
                                                        )}
                                                    >
                                                        {option.label}
                                                    </span>
                                                    <IconCheck
                                                        className={cn(
                                                            "h-4 w-4 stroke-neutral",
                                                            selectedOption?.key === option.key ? "opacity-100" : "opacity-0"
                                                        )}
                                                    />
                                                </CommandItem>
                                            )
                                        }
                                        )}
                                    </div>
                                </CommandGroup>

                            </CommandList>
                        </Command>
                    </PopoverContent>
                )}
        </Popover>
    )
}
