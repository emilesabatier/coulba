import { IconFreezeColumn } from "@tabler/icons-react"
import { Table } from "@tanstack/react-table"
import { ComponentProps, useState } from "react"
import { ButtonSubtle } from "../../buttons"
import { InputSwitch } from "../../inputs/switch/inputSwitch"
import { Popover, PopoverContent, PopoverTrigger } from "../../overlays"
import { cn } from "../../services"


export function ColumnVisibility<T>({ table, className }: { table: Table<T>, className?: ComponentProps<'div'>['className'] }) {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={() => setOpen(!open)}>
            <PopoverTrigger asChild>
                <ButtonSubtle
                    icon={<IconFreezeColumn />}
                    className={cn(className)}
                    onClick={() => setOpen(!open)}
                />
            </PopoverTrigger>
            <PopoverContent
                align="start"
            >
                <div className="flex flex-col justify-start items-stretch">
                    {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                            return (
                                <div
                                    key={column.id}
                                    className={cn(
                                        "w-full h-[40px] relative flex justify-start overflow-hidden cursor-default select-none items-center p-2 gap-2"
                                    )}
                                >
                                    <InputSwitch
                                        value={!column.getIsVisible() ? false : true}
                                        onChange={(value) => column.toggleVisibility(!value ? false : true)}
                                    />
                                    <span
                                        className={cn(
                                            "text-left",
                                            column.getIsVisible() ? "text-primary" : ""
                                        )}
                                    >
                                        {column.columnDef.meta?.label}
                                    </span>
                                </div>
                            )
                        })}
                </div>
            </PopoverContent>
        </Popover>
    )
}
