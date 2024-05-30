import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { router } from "../../../routes/router"
import { accountStatementsOptions } from "../../../services/api/auth/accountStatements/accountStatementsOptions"
import { deleteAccountStatement } from "../../../services/api/auth/accountStatements/deleteAccountStatement"
import { Delete } from "../../layouts/actions/delete"


type DeleteAccountStatement = {
    accountStatement: v.Output<typeof auth.accountStatements.get.return>
    children: ReactElement
}

export function DeleteAccountStatement(props: DeleteAccountStatement) {

    const mutation = useMutation({
        mutationKey: accountStatementsOptions.queryKey,
        mutationFn: deleteAccountStatement
    })

    return (
        <Delete
            title="Supprimer ?"
            description="Attention, cela supprimera toutes les données."
            onSubmit={async () => {
                mutation.mutate({ params: { idAccountStatement: props.accountStatement.id } }, {
                    onSuccess: () => {
                        router.navigate({
                            to: "/configuration/compte-de-resultat/lignes/$idStatement",
                            params: { idStatement: props.accountStatement.idStatement }
                        })
                        toast({ title: "Données supprimées", variant: "success" })
                    }
                })
                return true
            }}
            children={props.children}
        />
    )
}
