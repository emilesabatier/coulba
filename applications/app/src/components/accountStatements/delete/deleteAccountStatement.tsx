import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { deleteAccountStatement } from "../../../services/api/auth/accountStatements/deleteAccountStatement"
import { statementOptions } from "../../../services/api/auth/statements/statementsOptions"
import { Delete } from "../../layouts/actions/delete"


type DeleteAccountStatement = {
    accountStatement: v.Output<typeof auth.accountStatements.get.return>
    children: ReactElement
}

export function DeleteAccountStatement(props: DeleteAccountStatement) {
    const mutation = useMutation({ mutationFn: deleteAccountStatement })

    return (
        <Delete
            title="Supprimer ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idAccountStatement: props.accountStatement.id }
                })
                if (!response) return false

                await router.navigate({
                    to: "/configuration/compte-de-resultat/postes/$idStatement",
                    params: { idStatement: props.accountStatement.idStatement }
                })
                await queryClient.invalidateQueries(statementOptions(props.accountStatement.idStatement))
                toast({ title: "Données supprimées", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
