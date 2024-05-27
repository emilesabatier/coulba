import { ButtonGhost, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatText } from "@coulba/design/formats"
import { IconEye, IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { transactionsOptions } from "../../services/api/auth/transactions/transactionsOptions"
import { Table } from "../layouts/table"
import { CreateTransaction } from "./create/createTransaction"
import { ReadTransaction } from "./read/readTransaction"


export function TransactionsTable() {
    const transactions = useQuery(transactionsOptions)

    const transactionsData = (transactions.data ?? [])
        .sort((a, b) => b.date.localeCompare(a.date))

    return (
        <Table
            data={transactionsData}
            isLoading={transactions.isLoading}
            columns={[
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
                {
                    accessorKey: 'isConfirmed',
                    header: 'État',
                    cell: ({ row }) => (<FormatBoolean boolean={row.original.isConfirmed} text={!row.original.isConfirmed ? "Brouillon" : "Confirmé"} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'label',
                    header: 'Libellé',
                    cell: ({ row }) => (<FormatText text={row.original.label} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'date',
                    header: "Date",
                    cell: (context) => (<FormatDate isoDate={String(context.getValue())} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'createdOn',
                    header: "Ajouté le",
                    cell: (context) => (<FormatDateTime isoDate={String(context.getValue())} />),
                    filterFn: 'includesString'
                }
            ]}
        >
            <CreateTransaction>
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter une opération"
                />
            </CreateTransaction>
        </Table>
    )
}
