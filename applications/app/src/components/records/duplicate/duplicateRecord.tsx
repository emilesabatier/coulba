import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { duplicateRecord } from "../../../services/api/auth/records/duplicateRecord"
import { recordOptions } from "../../../services/api/auth/records/recordsOptions"
import { ConfirmDialog } from "../../layouts/actions/confirmDialog"


type DuplicateRecord = {
    record: v.Output<typeof auth.records.get.return>
    children: ReactElement
}

export function DuplicateRecord(props: DuplicateRecord) {
    const mutation = useMutation({ mutationFn: duplicateRecord })

    return (
        <ConfirmDialog
            title="Dupliquer l'écriture ?"
            description={undefined}
            submitLabel="Dupliquer"
            color="success"
            onSubmit={async () => {
                const response = await mutation.mutateAsync({
                    params: { idRecord: props.record.id }
                })
                if (!response) return false

                await queryClient.invalidateQueries(recordOptions(props.record.id))
                // router.navigate({
                //     to: "/ecritures/$idRecord",
                //     params: { idRecord: props.record.id }
                // })
                router.navigate({ to: "/ecritures" })
                toast({ title: "Écriture dupliquée", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
