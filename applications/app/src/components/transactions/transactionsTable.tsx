import { FormatDateTime, FormatPrice } from "@coulba/design/formats"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    useReactTable
} from '@tanstack/react-table'
import { Fragment, useMemo } from "react"
import * as v from "valibot"
import { ErrorMessage } from "../layouts/errorMessage"
import { Loading } from "../layouts/loading"
import { transactionsOptions } from "../../services/api/auth/transactions/transactionOptions"


export function TransactionsTable() {
    const transactions = useQuery(transactionsOptions)
    const memoizedData = useMemo(() => transactions.data ?? [], [transactions.data])

    const columns: ColumnDef<v.Output<typeof auth.transactions.get.return>>[] = [
        {
            id: 'expander',
            header: () => null,
            cell: ({ row }) => {
                return row.getCanExpand() ? (
                    <button
                        {...{
                            onClick: row.getToggleExpandedHandler(),
                            style: { cursor: 'pointer' },
                        }}
                    >
                        {row.getIsExpanded() ? '👇' : '👉'}
                    </button>
                ) : null
            }
        },
        {
            accessorKey: 'label',
            header: 'Libellé',
            cell: ({ getValue }) => (getValue())
        },
        {
            accessorKey: 'date',
            header: "Date",
            cell: (context) => (
                <FormatDateTime isoDate={String(context.getValue())} />
            )
        },
        {
            accessorKey: 'debit',
            header: "Débit",
            cell: (context) => (
                <FormatPrice price={String(context.getValue())} />
            )
        },
        {
            accessorKey: 'credit',
            header: "Crédit",
            cell: (context) => (
                <FormatPrice price={String(context.getValue())} />
            )
        },
        {
            accessorKey: 'createdOn',
            header: "Ajouté le",
            cell: (context) => (
                <FormatDateTime isoDate={String(context.getValue())} />
            )
        }
    ]

    const table = useReactTable<v.Output<typeof auth.transactions.get.return>>({
        data: memoizedData,
        columns,
        getRowCanExpand: () => true,
        getCoreRowModel: getCoreRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
    })

    if (transactions.isPending) return <Loading />
    if (transactions.isError) return <ErrorMessage message={transactions.error.message} />
    return (
        <div className="w-full h-full  border border-neutral/25 rounded-sm">
            <table className="w-full h-full">
                <thead className="sticky top-0 border-b border-neutral/25">
                    {table.getHeaderGroups().map(headerGroup => (
                        <tr key={headerGroup.id}>
                            {headerGroup.headers.map(header => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan} className="">
                                        {header.isPlaceholder ? null : (
                                            <div className="flex justify-start items-center p-2">
                                                {flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                            </div>
                                        )}
                                    </th>
                                )
                            })}
                        </tr>
                    ))}
                </thead>
                <tbody>
                    {table.getRowModel().rows.map(row => {
                        return (
                            <Fragment key={row.id}>
                                <tr>
                                    {/* first row is a normal row */}
                                    {row.getVisibleCells().map(cell => {
                                        return (
                                            <td key={cell.id}>
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
                                {row.getIsExpanded() && (
                                    <tr>
                                        {/* 2nd row is a custom 1 cell row */}
                                        <td colSpan={row.getVisibleCells().length}>
                                            <pre style={{ fontSize: '10px' }}>
                                                <code>{JSON.stringify(row.original, null, 2)}</code>
                                            </pre>
                                        </td>
                                    </tr>
                                )}
                            </Fragment>
                        )
                    })}
                </tbody>
            </table>
            {/* <div>{table.getRowModel().rows.length} Rows</div> */}
        </div>
    )
}
