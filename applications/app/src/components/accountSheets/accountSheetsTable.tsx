import { ButtonPlain } from "@coulba/design/buttons"
import { FormatBoolean, FormatDateTime, FormatSelect } from "@coulba/design/formats"
import { auth } from "@coulba/schemas/routes"
import { IconPlus } from "@tabler/icons-react"
import * as v from "valibot"
import { router } from "../../routes/router"
import { FormatAccountWithFetch } from "../accounts/format/formatAccountWithFetch"
import { Table } from "../layouts/table"
import { CreateAccountSheet } from "./create/createAccountSheet"
import { flowOptions } from "./flowOptions"


type AccountSheetsTable = {
    sheet: v.Output<typeof auth.sheets.get.return>
    isLoading?: boolean
}

export function AccountSheetsTable(props: AccountSheetsTable) {
    return (
        <Table
            data={props.sheet.accountSheets}
            isLoading={props.isLoading}
            columns={[
                {
                    accessorKey: 'idAccount',
                    header: 'Compte',
                    cell: ({ row }) => (<FormatAccountWithFetch idAccount={row.original.idAccount} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'flow',
                    header: 'Flux',
                    cell: ({ row }) => (<FormatSelect option={row.original.flow} options={flowOptions} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'isAllowance',
                    header: 'Colonne brut ?',
                    cell: ({ row }) => (<FormatBoolean boolean={row.original.isAllowance} />),
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
                    to: "/configuration/bilan/$idSheet/comptes/$idAccountSheet",
                    params: {
                        idSheet: row.original.idSheet,
                        idAccountSheet: row.original.id
                    }
                })
            }}
        >
            <CreateAccountSheet sheet={props.sheet}>
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter"
                />
            </CreateAccountSheet>
        </Table>
    )
}
