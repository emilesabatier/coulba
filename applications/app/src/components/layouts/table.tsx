import { FormatNull } from "@coulba/design/formats"
import { InputDebounced, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import {
    ColumnDef,
    SortingState,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    useReactTable
} from '@tanstack/react-table'
import { ReactElement, useMemo, useState } from "react"
import { Section } from "./section/section"


type Table<T> = {
    children?: ReactElement
    data: Array<T>
    isLoading?: boolean
    columns: Array<ColumnDef<T>>
}

export function Table<T>(props: Table<T>) {

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

    if (props.isLoading) return <CircularLoader />
    return (
        <Section.Root
        // className="h-full"
        >
            <Section.Item>
                {props.children ?? null}
                <InputDebounced
                    value={globalFilter ?? ""}
                    onChange={(value) => setGlobalFilter(value)}
                >
                    <InputText
                        placeholder="Recherche"
                        className="max-w-[300px]"
                    />
                </InputDebounced>
            </Section.Item>
            <Section.Item className="w-full h-fit overflow-auto p-0 flex flex-col justify-start items-stretch">
                <table className="w-full h-full border-collapse">
                    <thead className="w-full sticky top-0 bg-white">
                        <tr className="w-full">
                            {table.getFlatHeaders().map((header) => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan} className="w-fit">
                                        {/* <Button
                                            onClick={header.column.getToggleSortingHandler()}
                                        > */}
                                        <div className="flex justify-start items-center p-3 border-b border-b-neutral/10 border-t-2 border-t-white">
                                            <span className="text-neutral/75 text-sm after:content-['\200b'] whitespace-nowrap">
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </span>
                                            {/* {{
                                                asc: 'up',
                                                desc: 'down',
                                            }[header.column.getIsSorted() as string] ?? null} */}
                                        </div>
                                        {/* </Button> */}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="w-full h-fit">
                        {table.getRowModel().rows.length > 0 ? null : <tr><td><FormatNull className="p-2" /></td></tr>}
                        {table.getRowModel().rows.map((row) => {
                            return (
                                <tr className="w-full border-b border-neutral/5 last:border-b-0">
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id} className="w-fit last:w-[1%]">
                                                <div className="flex justify-start items-center p-3">
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
            </Section.Item>
        </Section.Root>
    )
}
