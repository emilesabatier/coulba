import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { computationOptions } from "../../../services/api/auth/computations/computationsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { formatComputation } from "./formatComputation"


type FormatComputationWithFetch = {
    idComputation: v.Output<typeof auth.computations.get.return>["id"]
}

export function FormatComputationWithFetch(props: FormatComputationWithFetch) {
    const computation = useQuery(computationOptions(props.idComputation))

    if (computation.isLoading) return (<CircularLoader />)
    if (computation.isError) return <ErrorMessage message={computation.error.message} />
    if (!computation.data) return <FormatNull />
    return <FormatText text={formatComputation(computation.data)} />
}
