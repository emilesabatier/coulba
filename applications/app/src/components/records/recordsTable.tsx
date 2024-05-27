import { ButtonGhost, ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatNull, FormatPrice, FormatText } from "@coulba/design/formats"
import { auth } from "@coulba/schemas/routes"
import { IconEye, IconPlus } from "@tabler/icons-react"
import * as v from "valibot"
import { FormatAccountWithFetch } from "../accounts/format/formatAccountWithFetch"
import { FormatAttachmentWithFetch } from "../attachments/format/formatAttachmentWithFetch"
import { FormatJournalWithFetch } from "../journals/format/formatJournalWithFetch"
import { Table } from "../layouts/table"
import { CreateRecord } from "./create/createRecord"
import { ReadRecord } from "./read/readRecord"


type RecordsTable = {
    transaction: v.Output<typeof auth.transactions.get.return>
    isLoading?: boolean
}

export function RecordsTable(props: RecordsTable) {
    return (
        <Table
            data={props.transaction.records}
            isLoading={props.isLoading}
            columns={[
                {
                    id: 'actions',
                    header: () => null,
                    cell: ({ cell }) => {
                        return (
                            <ReadRecord idTransaction={props.transaction.id} idRecord={cell.row.original.id}>
                                <ButtonGhost
                                    icon={<IconEye />}
                                />
                            </ReadRecord>
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
            <CreateRecord transaction={props.transaction}>
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter un enregistrement"
                />
            </CreateRecord>
        </Table>
    )
}
