import { FormatDate, FormatPrice, FormatText, formatPrice } from "@coulba/design/formats"
import { useQuery } from "@tanstack/react-query"
import { rowsOptions } from "../../services/api/auth/rows/rowsOptions"
import { FormatAccountWithFetch } from "../accounts/format/formatAccountWithFetch"
import { Table } from "../layouts/table"


export function RowsReport() {
    const rows = useQuery(rowsOptions)

    const rowsData = (rows.data ?? [])
        .sort((a, b) => b.createdOn.localeCompare(a.createdOn))

    const totalDebit = rowsData.reduce<number>((previous, row) => {
        return previous + Number(row.debit)
    }, 0)

    const totalCredit = rowsData.reduce<number>((previous, row) => {
        return previous + Number(row.credit)
    }, 0)

    return (
        <Table
            data={rowsData}
            isLoading={rows.isLoading}
            columns={[
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
                    accessorKey: 'idAccount',
                    header: 'Compte',
                    cell: ({ row }) => (<FormatAccountWithFetch idAccount={row.original.idAccount} />),
                    filterFn: 'includesString',
                    maxSize: 300
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
                }
            ]}
        >
            <div className="flex justify-center items-center gap-1.5">
                {/* {
                (formatPrice(totalDebit) === formatPrice(totalCredit)) ? null : (
                    <div className="border border-warning rounded-md p-3 bg-warning/5 flex justify-start items-start gap-3">
                        <IconAlertTriangle className="stroke-warning" />
                        <p className="text-warning">Attention, le total de la colonne débit et le total de la colonne crédit sont différents. Des ajustements sont nécessaires de votre part.</p>
                    </div>
                )
            } */}
                <div className="w-full px-3 py-1.5 border border-neutral/10 rounded-md flex justify-start items-end gap-3">
                    <span className="text-lg uppercase text-neutral/25 whitespace-nowrap">Débit total</span>
                    <span className="text-2xl">{formatPrice(totalDebit)}</span>
                </div>
                <div className="w-full px-3 py-1.5 border border-neutral/10 rounded-md flex justify-start items-end gap-3">
                    <span className="text-lg uppercase text-neutral/25 whitespace-nowrap">Crédit total</span>
                    <span className="text-2xl">{formatPrice(totalCredit)}</span>
                </div>
            </div>
        </Table>
    )


    // return (
    //     <div className="w-full h-full flex flex-col justify-start items-stretch border border-neutral/20 rounded-md">
    //         <div className="flex justify-end items-stretch p-3 border-b border-neutral/10">
    //             <InputDebounced
    //                 value={globalFilter ?? ""}
    //                 onChange={(value) => setGlobalFilter(value)}
    //             >
    //                 <InputText
    //                     placeholder="Recherche"
    //                     className="max-w-[300px]"
    //                 />
    //             </InputDebounced>
    //         </div>
    //         <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto">
    //             <table className="w-full h-full border-collapse">
    //                 <thead className="w-full border-b border-neutral/10">
    //                     <tr className="w-full">
    //                         {table.getFlatHeaders().map((header) => {
    //                             return (
    //                                 <th key={header.id} colSpan={header.colSpan} className="w-fit p-2">
    //                                     {header.isPlaceholder ? null : (
    //                                         <div className="flex justify-start items-center p-2">
    //                                             <span className="text-neutral/75 text-sm">
    //                                                 {flexRender(
    //                                                     header.column.columnDef.header,
    //                                                     header.getContext()
    //                                                 )}
    //                                             </span>
    //                                         </div>
    //                                     )}
    //                                 </th>
    //                             )
    //                         })}
    //                     </tr>
    //                 </thead>
    //                 <tbody className="w-full">
    //                     {table.getRowModel().rows.length > 0 ? null : <tr><td><FormatNull className="p-2" /></td></tr>}
    //                     {table.getRowModel().rows.map((row) => {
    //                         return (
    //                             <tr className="w-full border-b border-neutral/5 last:border-b-0">
    //                                 {row.getVisibleCells().map(cell => {
    //                                     return (
    //                                         <td key={cell.id} className="w-fit max-w-[400px] p-2 last:w-[1%]">
    //                                             <div className="flex justify-start items-center p-2">
    //                                                 {flexRender(
    //                                                     cell.column.columnDef.cell,
    //                                                     cell.getContext()
    //                                                 )}
    //                                             </div>
    //                                         </td>
    //                                     )
    //                                 })}
    //                             </tr>
    //                         )
    //                     })}
    //                 </tbody>
    //             </table>
    //         </div>
    //     </div>
    // )
}
