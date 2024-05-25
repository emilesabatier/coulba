import { IconChevronLeft, IconChevronRight, IconSelector, IconSortAscending, IconSortDescending } from "@tabler/icons-react"
import {
    ColumnDef,
    ColumnFiltersState,
    ColumnResizeMode,
    FilterFn,
    PaginationState,
    RowData,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable
} from "@tanstack/react-table"
import { ReactElement, useMemo, useRef, useState } from "react"
import { Button, ButtonGhost } from "../../buttons"
import { FormatNull } from "../../formats"
import { InputText, Option } from "../../inputs"
import { cn } from "../../services"
import { ColumnFilter } from "./columnFilter"


declare module '@tanstack/react-table' {
    interface ColumnMeta<TData extends RowData, TValue> {
        label?: string
        filterElement?: ReactElement,
        align?: "left" | "center" | "right"
    }
}

export interface Columns<T> {
    header: string
    accessorKey: keyof T | "actions" | string
    accessorFn: (originalRow: T, index: number) => string | number | null | undefined
    cell: (data: T) => ReactElement | null | string
    enableSorting?: boolean
    enableHiding?: boolean
    enableColumnFilter?: boolean
    enableResizing?: boolean
    filterFn?: FilterFn<T>
    filterElement?: ReactElement
    selectOptions?: Option[]
    align?: "left" | "center" | "right"
}

interface TableData<T> {
    id: string
    columns: Columns<T>[]
    data?: T[]
}


export function TableData<T extends { id: string }>({ id, columns, data }: TableData<T>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [globalFilter, setGlobalFilter] = useState('')
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
    const [columnResizeMode, _setColumnResizeMode] = useState<ColumnResizeMode>('onEnd')
    const [{ pageIndex, pageSize }, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 15,
    })
    const pagination = useMemo(
        () => ({
            pageIndex,
            pageSize,
        }),
        [pageIndex, pageSize]
    )

    const memoizedData = useMemo(() => data, [data])
    const memoizedColumns = useMemo<ColumnDef<T, unknown>[]>(() => columns.map(x => ({
        ...x,
        header: x.header,
        cell: (cellProps) => x.cell(cellProps.row.original),
        accessorFn: x.accessorFn,
        enableSorting: x.enableSorting,
        enableHiding: (x.enableHiding === undefined) ? true : x.enableHiding,
        enableColumnFilter: x.enableColumnFilter,
        enableGlobalFilter: x.enableColumnFilter,
        enableResizing: (x.enableResizing === undefined) ? true : x.enableResizing,
        filterFn: x.filterFn,
        minSize: 48,
        size: undefined,
        meta: {
            label: x.header,
            filterElement: x.filterElement,
            align: x.align ?? "left"
        }
    })), [columns])


    const table = useReactTable<T>({
        data: memoizedData ?? [],
        columns: memoizedColumns,
        getCoreRowModel: getCoreRowModel(),
        onSortingChange: setSorting,
        columnResizeMode,
        getSortedRowModel: getSortedRowModel(),
        onColumnFiltersChange: setColumnFilters,
        onGlobalFilterChange: setGlobalFilter,
        getFilteredRowModel: getFilteredRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
            sorting,
            globalFilter,
            columnFilters,
            columnVisibility,
            pagination
        }
    })

    const parentRef = useRef<HTMLDivElement>(null)
    const { rows } = table.getRowModel()

    return (
        <div id={id} className="w-full max-w-full h-full max-h-full grid grid-rows-[max-content_auto_max-content] gap-y-2 md:gap-y-4 overflow-hidden rounded-md bg-background/50 p-2 md:p-3">
            <div className="w-full flex justify-between items-end overflow-hidden gap-2">
                <div className="inline-flex justify-start items-center gap-1">
                    <span className="font-bold text-sm">{data?.length}</span>
                    <span className="text-neutral/50 text-sm whitespace-nowrap overflow-hidden text-ellipsis">éléments</span>
                </div>
                <div className="max-w-full flex justify-end items-end overflow-hidden gap-1 md:gap-2">
                    <ColumnFilter<T> table={table} />
                    <InputText
                        placeholder="Recherche rapide..."
                        value={globalFilter}
                        onChange={(value) => table.setGlobalFilter(value)}
                        className="w-fit max-w-full overflow-hidden border-transparent"
                    />
                    {/* <ColumnVisibility<T> table={table} /> */}
                </div>
            </div>
            <div className="w-full h-full overflow-hidden bg-white rounded-md">
                <div ref={parentRef} className="w-full h-full overflow-auto">
                    <div className="relative w-full h-fit grid grid-rows-[max-content_auto] grid-cols-[max-content_auto]">
                        <div className={cn(
                            "bg-white sticky top-0 left-0 z-[3] border-b border-neutral/10 flex justify-start items-center",
                            rows.length === 0 ? "" : "p-2 border-r"
                        )} />
                        <div className="bg-white sticky top-0 z-[2] border-b border-b-neutral/10 flex justify-start items-stretch">
                            {table.getFlatHeaders().slice(1).map((header, _headerIndex) => {
                                return (
                                    <div
                                        key={header.id}
                                        className="relative z-0 flex justify-start items-center overflow-hidden p-2"
                                        style={{ width: header.getSize() }}
                                    >
                                        <Button
                                            onClick={() => header.column.toggleSorting()}
                                            className="w-full"
                                        >
                                            <div className="w-full flex justify-start items-center gap-2 overflow-hidden hover:bg-neutral/5 p-2 rounded-sm">
                                                <span className={cn(
                                                    "w-full whitespace-nowrap overflow-hidden text-ellipsis text-left",
                                                    (header.column.columnDef.meta?.align === "right") ? "text-right" : (header.column.columnDef.meta?.align === "center" ? "text-center" : undefined)
                                                )}>
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                </span>
                                                {!header.column.getIsSorted() ? <IconSelector size={16} className="stroke-neutral/50" /> : null}
                                                {header.column.getIsSorted() === "asc" ? <IconSortDescending size={16} className="stroke-neutral/50" /> : null}
                                                {header.column.getIsSorted() === "desc" ? <IconSortAscending size={16} className="stroke-neutral/50" /> : null}
                                            </div>
                                        </Button>
                                        <div
                                            onMouseDown={header.getResizeHandler()}
                                            onTouchStart={header.getResizeHandler()}
                                            className={cn(
                                                "absolute right-0 h-full w-1 hover:bg-neutral/10 cursor-col-resize select-none touch-none",
                                                header.column.getIsResizing() ? 'bg-neutral' : ''
                                            )}
                                            style={{
                                                transform:
                                                    (columnResizeMode === 'onEnd') &&
                                                        header.column.getIsResizing()
                                                        ? `translateX(${table.getState().columnSizingInfo.deltaOffset}px)`
                                                        : '',
                                            }}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                        <div className={cn(
                            "bg-white sticky left-0 z-[1] flex-col",
                            rows.length === 0 ? "" : "border-r border-neutral/10"
                        )}>
                            {rows.map((row) => {
                                const [cell] = row?.getVisibleCells()
                                if (!cell) return null
                                return (
                                    <div
                                        key={row.id}
                                        className="border-b border-b-neutral/10 flex justify-center items-center p-2"
                                    >
                                        <div className="overflow-hidden flex justify-center items-center w-[42px] h-[40px]">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="relative">
                            {
                                rows.length === 0 ? (
                                    <div className="p-2 md:p-3">
                                        <FormatNull text="Aucune donnée." />
                                    </div>
                                ) : null
                            }
                            {rows.map((row) => {
                                return (
                                    <div
                                        key={row.id}
                                        className="w-full border-b border-b-neutral/10 flex justify-start items-stretch"
                                    >
                                        {row?.getVisibleCells().slice(1).map((cell, cellIndex) => {
                                            return (
                                                <div
                                                    key={cellIndex}
                                                    className="w-full border-r border-r-transparent last:border-r-0 flex justify-start items-center overflow-hidden text-ellipsis p-2"
                                                    style={{ width: cell.column.getSize() }}
                                                >
                                                    <div className={cn(
                                                        "w-full overflow-hidden flex justify-start items-center h-[40px]",
                                                        (cell.column.columnDef.meta?.align === "right") ? "justify-end" : (cell.column.columnDef.meta?.align === "center" ? "justify-center" : undefined)
                                                    )}>
                                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-end items-center gap-2">
                <div className="inline-flex justify-start items-center gap-1">
                    <span className="text-neutral/50">Page</span>
                    <span className="font-bold">{table.getState().pagination.pageIndex + 1}</span>
                    <span className="text-neutral/50">sur</span>
                    <span className="font-bold">{table.getPageCount()}</span>
                </div>
                <div className="flex justify-start items-center gap-1 md:gap-2">
                    <ButtonGhost
                        icon={<IconChevronLeft />}
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    />
                    <ButtonGhost
                        icon={<IconChevronRight />}
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    />
                </div>
            </div>
        </div >
    )
}
