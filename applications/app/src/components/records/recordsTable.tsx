import { ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatNull, FormatText } from "@coulba/design/formats"
import { IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { router } from "../../routes/router"
import { recordsOptions } from "../../services/api/auth/records/recordsOptions"
import { Table } from "../layouts/table"
import { CreateRecord } from "./create/createRecord"
import { FormatAttachmentWithFetch } from "../attachments/format/formatAttachmentWithFetch"
import { FormatJournalWithFetch } from "../journals/format/formatJournalWithFetch"


export function RecordsTable() {
    const records = useQuery(recordsOptions)

    const recordsData = (records.data ?? [])
        .sort((a, b) => b.date.localeCompare(a.date))

    return (
        <Table
            data={recordsData}
            isLoading={records.isLoading}
            columns={[
                {
                    accessorKey: 'isConfirmed',
                    header: 'État',
                    cell: ({ row }) => (
                        <FormatBoolean
                            boolean={row.original.isConfirmed}
                            text={!row.original.isConfirmed ? "Brouillon" : "Confirmé"}
                        />
                    ),
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
                    accessorKey: 'date',
                    header: "Date",
                    cell: (context) => (<FormatDate isoDate={String(context.getValue())} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'idAttachment',
                    header: 'Pièce justificative',
                    cell: ({ row }) => (!row.original.idAttachment ? <FormatNull /> : <FormatAttachmentWithFetch idAttachment={row.original.idAttachment} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'createdOn',
                    header: "Ajouté le",
                    cell: (context) => (<FormatDateTime isoDate={String(context.getValue())} />),
                    filterFn: 'includesString'
                }
            ]}
            onRowClick={(row) => {
                router.navigate({
                    to: "/ecritures/$idRecord",
                    params: { idRecord: row.original.id }
                })
            }}
        >
            <CreateRecord>
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter une écriture"
                />
            </CreateRecord>
        </Table>
    )
}
