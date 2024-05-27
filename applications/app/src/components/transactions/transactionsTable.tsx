import { ButtonGhost, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { IconEye, IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { transactionsOptions } from "../../services/api/auth/transactions/transactionsOptions"
import { FormatAccountWithFetch } from "../accounts/format/formatAccountWithFetch"
import { FormatAttachmentWithFetch } from "../attachments/format/formatAttachmentWithFetch"
import { FormatJournalWithFetch } from "../journals/format/formatJournalWithFetch"
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
                }
            ]}
        >
            <CreateTransaction>
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter un enregistrement"
                />
            </CreateTransaction>
        </Table>
    )
}
