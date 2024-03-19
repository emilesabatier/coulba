import { IconCheck, IconSelector, IconX } from "@tabler/icons-react"
import { CommandEmpty, CommandLoading } from "cmdk"
import { Fragment, useState } from "react"
import { Button, ButtonGhost } from "../../buttons"
import { FormatNull } from "../../formats"
import { CircularLoader } from "../../layouts"
import { Command, CommandInput, CommandItem, CommandList } from "../../layouts/command"
import { Popover, PopoverContent, PopoverTrigger } from "../../overlays/popover/popover"
import { cn } from "../../services/cn"
import { Option } from "../combobox/inputCombobox"



type ComboboxMultiple = {
    placeholder: string
    emptyLabel?: string
    options: Option[]
    selectedOptions: Option[]
    onChange: (newValues: Option[]) => void
    className?: string
    autoFocus?: boolean
    loading?: boolean
    isDisabled?: boolean
}

export function ComboboxMultiple(props: ComboboxMultiple) {

    const [open, setOpen] = useState(false)

    const handleUnselect = (index: number) => props.onChange([...props.selectedOptions.slice(0, index), ...props.selectedOptions.slice(index + 1)])

    const options = props.options
        .filter((option) => !props.selectedOptions.some((x) => x.key === option.key))

    return (
        <div className="flex flex-col justify-start items-stretch gap-1">
            <div className="flex flex-col justify-start items-stretch p-2 w-full rounded-sm border border-neutral/25 disabled:cursor-not-allowed disabled:opacity-50 max-h-64 overflow-auto min-h-[40px]">
                {(props.selectedOptions.length === 0) ? (
                    <div className="w-full h-full flex justify-start items-center">
                        <FormatNull text={props.emptyLabel ?? "Aucune donnée sélectionnée"} />
                    </div>
                ) : (
                    props.selectedOptions.map((option, index) => (
                        <Fragment key={option.key}>
                            <div className="flex justify-between items-center gap-2 rounded-sm" >
                                <span className="p-2">
                                    {option.label}
                                </span>
                                <ButtonGhost
                                    onClick={() => handleUnselect(index)}
                                    icon={<IconX />}
                                />
                            </div>
                        </Fragment>
                    ))
                )}
            </div>
            <Popover open={open} onOpenChange={setOpen} modal>
                <PopoverTrigger asChild>
                    <Button
                        role="combobox"
                        data-open={open}
                        className="w-full group"
                        onClick={() => {
                            if (props.isDisabled) return
                            setOpen(!open)
                        }}
                        autoFocus={props.autoFocus}
                    >
                        <div className={cn(
                            "w-full grid grid-cols-[auto_min-content] items-center gap-x-2 p-2 border border-neutral/25 rounded-sm",
                            "group-focus:border-neutral/50 group-focus:shadow-outer group-focus:bg-neutral/5",
                            "group-data-[state=open]:border-neutral/50 group-data-[state=open]:bg-neutral/5 group-data-[state=open]:shadow-outer",
                        )}
                        >
                            <span className="w-full h-fit text-left text-neutral/50 text-base">{props.placeholder}</span>
                            <IconSelector className="h-4 w-4 shrink-0 opacity-50" />
                        </div>
                    </Button>
                </PopoverTrigger>
                {
                    !open ? null : (
                        <PopoverContent
                            align="start"
                        >
                            <Command
                                className={cn(
                                    "w-full",
                                    props.className
                                )}
                                filter={(value, search) => {
                                    const option = options?.find(x => x.key === value)?.label.toLowerCase()
                                    if (option?.includes(search.toLowerCase())) return 1
                                    return 0
                                }}
                            >
                                <CommandInput />
                                {props.loading ? <CommandLoading><CircularLoader /></CommandLoading> : null}
                                <CommandList className='max-h-64 overflow-auto flex flex-col justify-start items-stretch'>
                                    <CommandEmpty>
                                        <div className="relative h-[40px] p-3 flex justify-start items-center cursor-default select-none rounded-sm-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50">
                                            <span className="text-neutral/10 text-left italic">
                                                Aucun résultat.
                                            </span>
                                        </div>
                                    </CommandEmpty>
                                    {
                                        options.map((option) => {
                                            const isSelected = !!props.selectedOptions.find((x) => x.key === option.key)
                                            return (
                                                <CommandItem
                                                    key={option.key}
                                                    value={option.key}
                                                    onSelect={() => {
                                                        if (props.isDisabled) return
                                                        props.onChange(
                                                            isSelected
                                                                ? props.selectedOptions.filter((x) => x.key !== option.key)
                                                                : [...props.selectedOptions, option]
                                                        )
                                                        setOpen(false)
                                                    }}
                                                    className={cn(
                                                        "p-3 h-[40px] flex justify-between items-center overflow-hidden gap-3",
                                                        isSelected ? "bg-primary/10" : "bg-none hover:bg-neutral/5"
                                                    )}
                                                >
                                                    <span
                                                        className={cn(
                                                            "text-base",
                                                            isSelected ? "text-primary" : "text-neutral"
                                                        )}
                                                    >
                                                        {option.label}
                                                    </span>
                                                    <IconCheck
                                                        className={cn(
                                                            "h-4 w-4 stroke-primary",
                                                            isSelected ? "opacity-100" : "opacity-0"
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
        </div>
    )
}
