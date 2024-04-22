import { FormatDate, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { InputDebounced, InputText } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    getFilteredRowModel,
    useReactTable
} from '@tanstack/react-table'
import { useMemo, useState } from "react"
import * as v from "valibot"
import { FormatAccountWithFetch } from "../../accounts/format/formatAccountWithFetch"
import { FormatJournalWithFetch } from "../../journals/format/formatJournalWithFetch"


type RecordsTable = {
    records: v.Output<typeof auth.records.get.return>[]
}

export function RecordsTable(props: RecordsTable) {
    const memoizedData = useMemo(() => props.records, [props.records])
    const [globalFilter, setGlobalFilter] = useState("")

    const columns: ColumnDef<v.Output<typeof auth.records.get.return>>[] = [
        {
            accessorKey: 'date',
            header: "Date",
            cell: (context) => (<FormatDate isoDate={String(context.getValue())} />),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'label',
            header: 'Libellé',
            cell: ({ row }) => (<FormatText text={row.original.label} />),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'idJournal',
            header: 'Journal',
            cell: ({ row }) => (!row.original.idJournal ? <FormatNull /> : <FormatJournalWithFetch idJournal={row.original.idJournal} />),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'idAccount',
            header: 'Compte',
            cell: ({ row }) => (<FormatAccountWithFetch idAccount={row.original.idAccount} />),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'debit',
            header: "Débit",
            cell: ({ row }) => (<FormatPrice price={row.original.debit} />),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'credit',
            header: "Crédit",
            cell: ({ row }) => (<FormatPrice price={row.original.credit} />),
            filterFn: 'includesString'
        },
        // {
        //     id: 'actions',
        //     header: () => null,
        //     cell: ({ cell }) => {
        //         if (!cell.row.original.idTransaction) return null
        //         return (
        //             <ReadTransaction idTransaction={cell.row.original.idTransaction}>
        //                 <ButtonGhost
        //                     icon={<IconEye />}
        //                 />
        //             </ReadTransaction>
        //         )
        //     }
        // },
    ]

    const table = useReactTable<v.Output<typeof auth.records.get.return>>({
        data: memoizedData,
        columns,
        getRowCanExpand: () => true,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        state: {
            globalFilter,
        }
    })

    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch border border-neutral/20 rounded-md">
            <div className="flex justify-end items-stretch p-4 border-b border-neutral/10">
                <InputDebounced
                    value={globalFilter ?? ""}
                    onChange={(value) => setGlobalFilter(value)}
                >
                    <InputText
                        placeholder="Recherche"
                        className="max-w-[300px]"
                    />
                </InputDebounced>
            </div>
            <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto">
                <table className="w-full h-full border-collapse">
                    <thead className="w-full border-b border-neutral/10">
                        <tr className="w-full">
                            {table.getFlatHeaders().map((header) => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan} className="w-fit p-2">
                                        {header.isPlaceholder ? null : (
                                            <div className="flex justify-start items-center p-2">
                                                <span className="text-neutral/75 text-sm">
                                                    {flexRender(
                                                        header.column.columnDef.header,
                                                        header.getContext()
                                                    )}
                                                </span>
                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    </thead>
                    <tbody className="w-full">
                        {table.getRowModel().rows.length > 0 ? null : <tr><td><FormatNull className="p-2" /></td></tr>}
                        {table.getRowModel().rows.map((row) => {
                            return (
                                <tr className="w-full border-b border-neutral/5 last:border-b-0">
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id} className="w-fit p-2 last:w-[1%]">
                                                <div className="flex justify-start items-center p-2">
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
