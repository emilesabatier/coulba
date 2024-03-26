import { ButtonGhost, ButtonMenu } from "@coulba/design/buttons"
import { FormatDateTime, FormatFileSize, FormatNull } from "@coulba/design/formats"
import { InputDebounced, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { PopoverMenu } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { IconChevronLeft, IconChevronRight, IconDotsVertical, IconEye, IconPencil, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
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
import { useMemo, useState } from "react"
import * as v from "valibot"
import { attachmentsOptions } from "../../services/api/auth/attachments/attachmentsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { DeleteAttachment } from "./deleteAttachment/deleteAttachment"
import { ReadAttachment } from "./readAttachment/readAttachment"
import { UpdateAttachment } from "./updateAttachment/updateAttachment"


export function AttachmentsTable() {
    const attachments = useQuery(attachmentsOptions)
    const memoizedData = useMemo(() => attachments.data ?? [], [attachments.data])
    const [globalFilter, setGlobalFilter] = useState("")
    const [pagination, setPagination] = useState<PaginationState>({
        pageIndex: 0,
        pageSize: 10,
    })

    const columns: ColumnDef<v.Output<typeof auth.attachments.get.return>>[] = [
        {
            accessorKey: 'label',
            header: "Libellé",
            cell: ({ getValue }) => (getValue()),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'reference',
            header: 'Référence',
            cell: ({ getValue }) => (getValue()),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'type',
            header: "Type",
            cell: ({ row }) => (row.original.type.split("/").at(1)),
            filterFn: 'includesString'
        },
        {
            accessorKey: 'size',
            header: "Taille",
            cell: ({ row }) => (<FormatFileSize size={row.original.size} />),
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
                    <PopoverMenu
                        triggerElement={<ButtonGhost icon={<IconDotsVertical />} />}
                        align="end"
                    >
                        <ReadAttachment attachment={cell.row.original}>
                            <ButtonMenu
                                text="Consulter"
                                icon={<IconEye />}
                            />
                        </ReadAttachment>
                        <UpdateAttachment attachment={cell.row.original}>
                            <ButtonMenu
                                text="Modifier"
                                icon={<IconPencil />}
                            />
                        </UpdateAttachment>
                        <DeleteAttachment attachment={cell.row.original}>
                            <ButtonMenu
                                text="Supprimer"
                                icon={<IconTrash />}
                                color="error"
                            />
                        </DeleteAttachment>
                    </PopoverMenu>
                )
            }
        },
    ]

    const table = useReactTable<v.Output<typeof auth.attachments.get.return>>({
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

    if (attachments.isLoading) return <CircularLoader />
    if (attachments.isError) return <ErrorMessage message={attachments.error.message} />
    if (!attachments.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4">
            <div className="flex justify-end items-stretch">
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
            <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-sm">
                <table className="w-full h-full border-collapse">
                    <thead className="w-full border-b border-neutral/10">
                        <tr className="w-full">
                            {table.getFlatHeaders().map((header) => {
                                return (
                                    <th key={header.id} colSpan={header.colSpan} className="w-fit p-2">
                                        {header.isPlaceholder ? null : (
                                            <div className="flex justify-start items-center p-1">
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
                                                <div className="flex justify-start items-center p-1">
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
                <div className="w-full flex justify-end items-center gap-2 p-2 border-t border-neutral/10">
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
