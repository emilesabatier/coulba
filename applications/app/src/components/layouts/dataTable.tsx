import { FormatNull } from "@coulba/design/formats"
import { InputDebounced, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { cn } from "@coulba/design/services"
import { IconSortAscending, IconSortDescending } from "@tabler/icons-react"
import {
    ColumnDef,
    Row,
    SortingState,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable
} from '@tanstack/react-table'
import { ReactElement, useMemo, useState } from "react"


type DataTable<T> = {
    children?: ReactElement | null
    data: Array<T>
    isLoading?: boolean
    columns: Array<ColumnDef<T>>
    onRowClick?: (context: Row<T>) => void
}

export function DataTable<T>(props: DataTable<T>) {

    const memoizedData = useMemo(() => props.data, [props.data])
    const [globalFilter, setGlobalFilter] = useState("")
    const [sorting, setSorting] = useState<SortingState>([])

    const table = useReactTable<T>({
        data: memoizedData,
        columns: props.columns.map((column) => ({
            ...column,
            enableMultiSort: true
        })),
        getRowCanExpand: () => true,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        enableMultiSort: true,
        state: {
            globalFilter,
            sorting,
        }
    })

    if (props.isLoading) return <CircularLoader className="m-3" />
    return (
        <div className="shrink-0 w-full h-fit flex flex-col justify-start items-stretch gap-3">
            <div className="shrink-0 w-full h-fit flex justify-start items-start gap-1.5">
                <div>
                    {props.children ?? null}
                </div>
                <InputDebounced
                    value={globalFilter ?? ""}
                    onChange={(value) => setGlobalFilter(value)}
                >
                    <InputText
                        placeholder="Recherche"
                        className="max-w-[300px] ml-auto"
                    />
                </InputDebounced>
            </div>
            <div className="w-full max-w-full max-h-[600px] p-0 flex flex-col justify-start items-stretch overflow-auto rounded-md border border-neutral/10">
                <table className="w-full max-w-full h-full max-h-full border-collapse">
                    <thead className="w-full sticky top-0 bg-white">
                        <tr className="w-full">
                            {table.getFlatHeaders().map((header) => {
                                return (
                                    <th
                                        key={header.id}
                                        colSpan={header.colSpan}
                                        className="w-fit"
                                    >
                                        <div className="flex justify-start items-center gap-1.5 p-3 border-b border-b-neutral/10 border-t-2 border-t-white">
                                            <div
                                                onClick={header.column.getToggleSortingHandler()}
                                                className="w-fit cursor-pointer hover:bg-neutral/5 flex justify-start items-center gap-1.5 p-1.5 rounded-sm"
                                            >
                                                <span className="text-neutral/75 text-sm after:content-['\200b'] whitespace-nowrap">
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                </span>
                                                {{
                                                    asc: <IconSortAscending size={16} />,
                                                    desc: <IconSortDescending size={16} />,
                                                }[header.column.getIsSorted() as string] ?? null}
                                            </div>
                                        </div>
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="w-full h-fit">
                        {table.getRowModel().rows.length > 0 ? null : <tr><td><FormatNull className="p-2" /></td></tr>}
                        {table.getRowModel().rows.map((row) => {
                            return (
                                <tr
                                    key={row.id}
                                    onClick={() => {
                                        if (!props.onRowClick) return
                                        props.onRowClick(row)
                                    }}
                                    className={cn(
                                        "w-full border-b border-neutral/5 last:border-b-0",
                                        !props.onRowClick ? "" : "cursor-pointer hover:bg-neutral/5"
                                    )}
                                >
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id} className="w-fit last:w-[1%]">
                                                <div className="flex justify-start items-center p-3" >
                                                    {flexRender(
                                                        cell.column.columnDef.cell,
                                                        cell.getContext()
                                                    )}
                                                </div>
                                            </td>
                                        )
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
