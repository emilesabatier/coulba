import { InputCombobox } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { readComputations } from "../../services/api/auth/computations/readComputations"
import { formatComputation } from "./format/formatComputation"


type ComputationCombobox = {
    value?: string | null
    onChange: (value?: string | null) => void
    filter?: (value: v.Output<typeof auth.computations.get.return>) => boolean
    isDisabled?: boolean
    autoFocus?: boolean
}

export function ComputationCombobox(props: ComputationCombobox) {
    const computations = useQuery({
        queryKey: ["computations"],
        queryFn: readComputations
    })

    const options = (computations.data ?? [])
        .filter(props.filter ?? (() => true))
        .map((x) => ({
            key: x.id,
            label: formatComputation(x)
        }))
        .sort((a, b) => a.label.localeCompare(b.label))

    return (
        <InputCombobox
            value={props.value}
            onChange={props.onChange}
            placeholder="Choisir le calcul"
            options={options}
            isDisabled={props.isDisabled}
            autoFocus={props.autoFocus}
            isLoading={computations.isLoading}
        />
    )
}
