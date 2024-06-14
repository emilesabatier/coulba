import { ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime } from "@coulba/design/formats"
import { auth } from "@coulba/schemas/routes"
import { IconPlus } from "@tabler/icons-react"
import * as v from "valibot"
import { router } from "../../routes/router"
import { FormatAccountWithFetch } from "../accounts/format/formatAccountWithFetch"
import { Table } from "../layouts/table"
import { CreateAccountStatement } from "./create/createAccountStatement"


type AccountStatementsTable = {
    statement: v.Output<typeof auth.statements.get.return>
    isLoading?: boolean
}

export function AccountStatementsTable(props: AccountStatementsTable) {
    return (
        <Table
            data={props.statement.accountStatements}
            isLoading={props.isLoading}
            columns={[
                {
                    accessorKey: 'idAccount',
                    header: 'Compte',
                    cell: ({ row }) => (<FormatAccountWithFetch idAccount={row.original.idAccount} />),
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
                    to: "/configuration/compte-de-resultat/lignes/$idStatement/comptes/$idAccountStatement",
                    params: {
                        idStatement: row.original.idStatement,
                        idAccountStatement: row.original.id
                    }
                })
            }}
        >
            <CreateAccountStatement statement={props.statement}>
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter"
                />
            </CreateAccountStatement>
        </Table>
    )
}
