import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { recordOptions } from "../../../services/api/auth/records/recordsOptions"
import { validateRecord } from "../../../services/api/auth/records/validateRecord"
import { ConfirmDialog } from "../../layouts/actions/confirmDialog"


type ValidateRecord = {
    record: v.Output<typeof auth.records.get.return>
    children: ReactElement
}

export function ValidateRecord(props: ValidateRecord) {

    const mutation = useMutation({
        mutationKey: recordOptions(props.record.id).queryKey,
        mutationFn: validateRecord
    })

    return (
        <ConfirmDialog
            title="Valider l'écriture ?"
            description={"Attention, cette action est définitive et validera tous les lignes liées. Vous ne pourrez plus modifier les données."}
            submitLabel="Valider"
            color="success"
            onSubmit={async () => {
                mutation.mutate({ params: { idRecord: props.record.id } }, {
                    onSuccess: () => {
                        queryClient.invalidateQueries()
                        // router.navigate({
                        //     to: "/ecritures/$idRecord",
                        //     params: { idRecord: props.record.id }
                        // })
                        router.navigate({ to: "/ecritures" })
                        toast({ title: "Écriture validée", variant: "success" })
                    }
                })

                return true
            }}
            children={props.children}
        />
    )
}
