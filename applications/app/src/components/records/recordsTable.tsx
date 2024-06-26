import { ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDate, FormatDateTime, FormatNull, FormatText } from "@coulba/design/formats"
import { IconPlus } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { router } from "../../routes/router"
import { recordsOptions } from "../../services/api/auth/records/recordsOptions"
import { FormatAttachmentWithFetch } from "../attachments/format/formatAttachmentWithFetch"
import { FormatJournalWithFetch } from "../journals/format/formatJournalWithFetch"
import { DataTable } from "../layouts/dataTable"
import { CreateRecord } from "./create/createRecord"


export function RecordsTable() {
    const records = useQuery(recordsOptions)

    const recordsData = (records.data ?? [])
        .sort((a, b) => b.date.localeCompare(a.date))

    return (
        <DataTable
            data={recordsData}
            isLoading={records.isLoading}
            columns={[
                {
                    accessorKey: 'isValidated',
                    header: 'État',
                    cell: ({ row }) => (
                        <FormatBoolean
                            boolean={row.original.isValidated}
                            text={!row.original.isValidated ? "Brouillon" : "Confirmé"}
                        />
                    ),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'isComputed',
                    header: 'Simulé ?',
                    cell: ({ row }) => (
                        <FormatBoolean
                            boolean={row.original.isComputed}
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
                    cell: ({ row }) => (<FormatDate isoDate={row.original.date} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'idAttachment',
                    header: 'Pièce justificative',
                    cell: ({ row }) => (!row.original.idAttachment ? <FormatNull /> : <FormatAttachmentWithFetch idAttachment={row.original.idAttachment} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'validatedOn',
                    header: "Validé le",
                    cell: ({ row }) => (<FormatDateTime isoDate={row.original.validatedOn} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'createdOn',
                    header: "Ajouté le",
                    cell: ({ row }) => (<FormatDateTime isoDate={row.original.createdOn} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'lastUpdatedOn',
                    header: "Dernière mise à jour le",
                    cell: ({ row }) => (<FormatDateTime isoDate={row.original.lastUpdatedOn} />),
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
        </DataTable>
    )
}
