import { ButtonPlain } from "@coulba/design/buttons"
import { FormatDateTime, FormatSelect } from "@coulba/design/formats"
import { auth } from "@coulba/schemas/routes"
import { IconPlus } from "@tabler/icons-react"
import * as v from "valibot"
import { router } from "../../routes/router"
import { DataTable } from "../layouts/dataTable"
import { FormatStatementWithFetch } from "../statements/format/formatStatementWithFetch"
import { CreateComputationStatement } from "./create/createComputationStatement"
import { operationOptions } from "./operationOptions"


type ComputationStatementsTable = {
    computation: v.Output<typeof auth.computations.get.return>
    isLoading?: boolean
}

export function ComputationStatementsTable(props: ComputationStatementsTable) {
    return (
        <DataTable
            data={props.computation.computationStatements}
            isLoading={props.isLoading}
            columns={[
                {
                    accessorKey: 'idStatement',
                    header: 'Poste du compte de résultat',
                    cell: ({ row }) => (<FormatStatementWithFetch idStatement={row.original.idStatement} />),
                    filterFn: 'includesString'
                },
                {
                    accessorKey: 'operation',
                    header: 'Opération',
                    cell: ({ row }) => (<FormatSelect option={row.original.operation} options={operationOptions} />),
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
                    to: "/configuration/compte-de-resultat/calculs/$idComputation/postes/$idComputationStatement",
                    params: {
                        idComputation: row.original.idComputation,
                        idComputationStatement: row.original.id
                    }
                })
            }}
        >
            <CreateComputationStatement computation={props.computation}>
                <ButtonPlain
                    icon={<IconPlus />}
                    text="Ajouter"
                />
            </CreateComputationStatement>
        </DataTable>
    )
}
