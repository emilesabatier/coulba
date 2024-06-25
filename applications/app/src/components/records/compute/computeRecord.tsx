import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { ReactElement, cloneElement } from "react"
import * as v from "valibot"
import { queryClient } from "../../../contexts/state/queryClient"
import { computeRecord } from "../../../services/api/auth/records/computeRecord"
import { recordOptions } from "../../../services/api/auth/records/recordsOptions"


type ComputeRecord = {
    record: v.Output<typeof auth.records.get.return>
    children: ReactElement
}

export function ComputeRecord(props: ComputeRecord) {
    const mutation = useMutation({ mutationFn: computeRecord })

    return (
        cloneElement(props.children, {
            onClick: async () => {
                const response = await mutation.mutateAsync({
                    params: { idRecord: props.record.id }
                })
                if (!response) return false

                await queryClient.invalidateQueries(recordOptions(props.record.id))
                toast({ title: response.isComputed ? "L'écriture est simulée" : "L'écriture n'est plus simulée", variant: "success" })

                return true
            }
        })
    )
}
