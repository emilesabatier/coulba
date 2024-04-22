import { ButtonGhost } from "@coulba/design/buttons"
import { FormatDate, FormatDateTime, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { InputDebounced, InputText } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { IconChevronLeft, IconChevronRight, IconEye } from "@tabler/icons-react"
import {
    ColumnDef,
    PaginationState,
    flexRender,
    getCoreRowModel,
    getExpandedRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    useReactTable
} from '@tanstack/react-table'
import { ReactElement, useMemo, useState } from "react"
import * as v from "valibot"
import { FormatAccountWithFetch } from "../../accounts/format/formatAccountWithFetch"
import { FormatAttachmentWithFetch } from "../../attachments/format/formatAttachmentWithFetch"
import { FormatJournalWithFetch } from "../../journals/format/formatJournalWithFetch"
import { ReadTransaction } from "../read/readTransaction"


type TransactionsTable = {
    transactions: v.Output<typeof auth.transactions.get.return>[]
    children?: ReactElement
}

export function TransactionsTable(props: TransactionsTable) {
    const memoizedData = useMemo(() => props.transactions, [props.transactions])
    const [globalFilter, setGlobalFilter] = useState("")
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

    const columns: ColumnDef<v.Output<typeof auth.transactions.get.return>>[] = [
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
            accessorKey: 'idAttachment',
            header: 'Pièce justificative',
            cell: ({ row }) => (!row.original.idAttachment ? <FormatNull /> : <FormatAttachmentWithFetch idAttachment={row.original.idAttachment} />),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'date',
            header: "Date",
            cell: (context) => (<FormatDate isoDate={String(context.getValue())} />),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'debit',
            header: "Débit",
            cell: (context) => (<FormatPrice price={String(context.getValue())} />),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'credit',
            header: "Crédit",
            cell: (context) => (<FormatPrice price={String(context.getValue())} />),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'createdOn',
            header: "Ajouté le",
            cell: (context) => (<FormatDateTime isoDate={String(context.getValue())} />),
            filterFn: 'includesString'
        },
        {
            id: 'actions',
            header: () => null,
            cell: ({ cell }) => {
                return (
                    <ReadTransaction idTransaction={cell.row.original.id}>
                        <ButtonGhost
                            icon={<IconEye />}
                        />
                    </ReadTransaction>
                )
            }
        },
    ]

    const table = useReactTable<v.Output<typeof auth.transactions.get.return>>({
        data: memoizedData,
        columns,
        getRowCanExpand: () => true,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getExpandedRowModel: getExpandedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onGlobalFilterChange: setGlobalFilter,
        onPaginationChange: setPagination,
        state: {
            globalFilter,
            pagination,
        }
    })

    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
            <div className="flex justify-between items-center">
                {props.children}
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
            <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
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
                <div className="w-full flex justify-end items-center gap-2 p-4 border-t border-neutral/10">
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
            </div>
            {/* <div>{table.getRowModel().rows.length} Rows</div> */}
        </div>
    )
}
