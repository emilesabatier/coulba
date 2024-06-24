import { ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatPrice, FormatText } from "@coulba/design/formats"
import { auth } from "@coulba/schemas/routes"
import { IconPlus } from "@tabler/icons-react"
import * as v from "valibot"
import { router } from "../../routes/router"
import { FormatAccountWithFetch } from "../accounts/format/formatAccountWithFetch"
import { DataTable } from "../layouts/dataTable"
import { CreateRow } from "./create/createRow"


type RowsTable = {
    record: v.Output<typeof auth.records.get.return>
    isLoading?: boolean
}

export function RowsTable(props: RowsTable) {
    return (
        <DataTable
            data={props.record.rows}
            isLoading={props.isLoading}
            columns={[
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
                {
                    accessorKey: 'createdOn',
                    header: "Ajouté le",
                    cell: ({ row }) => (<FormatDateTime isoDate={row.original.createdOn} />),
                    filterFn: 'includesString'
                }
            ]}
            onRowClick={(row) => {
                router.navigate({
                    to: "/ecritures/$idRecord/lignes/$idRow",
                    params: {
                        idRecord: row.original.idRecord,
                        idRow: row.original.id
                    }
                })
            }}
        >
            <CreateRow
                record={props.record}
                isDisabled={props.record.isValidated}
            >
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter un ligne"
                    disabled={props.record.isValidated}
                />
            </CreateRow>
        </DataTable>
    )
}
