import { IconChevronDown, IconFilter, IconFilterOff } from "@tabler/icons-react"
import { Table } from "@tanstack/react-table"
import { cloneElement, useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Chip } from ".."
import { ButtonGhost } from "../../buttons"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../../overlays"
import { cn } from "../../services"


export function ColumnFilter<T>({ table }: { table: Table<T> }) {
    const [open, setOpen] = useState(false)

    const columns = table.getVisibleFlatColumns().filter(x => x.columnDef.enableColumnFilter)

    return (
        <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
            <DialogTrigger asChild>
                <ButtonGhost
                    icon={<IconFilter />}
                    onClick={() => setOpen(true)}
                />
            </DialogTrigger>
            {!open ? null : (
                <DialogContent onInteractOutside={() => setOpen(false)}>
                    <DialogHeader>
                        <DialogTitle>Filtres</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col justify-start items-stretch gap-2">
                        {
                            (columns.filter(x => x.getIsFiltered()).length === 0) ? null : (
                                <ButtonGhost
                                    icon={<IconFilterOff />}
                                    text='Enlever tous les filtres'
                                    onClick={() => table.resetColumnFilters()}
                                    className="self-end"
                                />
                            )
                        }
                        {columns.length === 0 ? <span className="p-3 text-neutral/25">Pas de filtre disponible</span> : null}
                        <Accordion type="single" collapsible className="flex flex-col justify-start items-stretch gap-2">
                            {
                                columns.map((column) => {
                                    return (
                                        <AccordionItem key={column.id} value={column.id}>
                                            <AccordionTrigger className="group">
                                                <div className={cn(
                                                    "w-full flex justify-between items-center gap-3 p-3 overflow-hidden",
                                                    "group-data-[state=open]:border-none group-data-[state=open]:border-neutral"
                                                )}>
                                                    <div className="flex justify-start items-center gap-2">
                                                        <span className="text-left group-data-[state=open]:text-neutral">
                                                            {column.columnDef.meta?.label}
                                                        </span>
                                                    </div>
                                                    <div className="flex justify-end items-center gap-2 overflow-hidden">
                                                        {!column.getIsFiltered() ? null : <Chip text="Actif" />}
                                                        <IconChevronDown
                                                            className="stroke-neutral group-data-[state=open]:-rotate-180 group-data-[state=open]:stroke-neutral"
                                                            size={16}
                                                        />
                                                    </div>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent>
                                                <div className="flex flex-col justify-start items-stretch gap-2 p-3">
                                                    {(!column.columnDef.meta?.filterElement) ? null :
                                                        cloneElement(column.columnDef.meta.filterElement, { column })
                                                    }
                                                    {
                                                        !column.getIsFiltered() ? null : (
                                                            <ButtonGhost
                                                                icon={<IconFilterOff />}
                                                                text='Enlever le filtre'
                                                                onClick={() => column.setFilterValue(undefined)}
                                                                className="self-end"
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    )
                                })
                            }
                        </Accordion>
                    </div>
                </DialogContent>
            )}
        </Dialog>
    )
}
