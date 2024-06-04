import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { rowOptions } from "../../../services/api/auth/rows/rowsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { ReadRow } from "../read/readRow"
import { formatRow } from "./formatRow"


type FormatRowWithFetch = {
    idRecord: v.Output<typeof auth.records.get.return>["id"]
    idRow: v.Output<typeof auth.rows.get.return>["id"]
}

export function FormatRowWithFetch(props: FormatRowWithFetch) {
    const row = useQuery(rowOptions(props.idRow))

    if (row.isLoading) return (<CircularLoader />)
    if (row.isError) return <ErrorMessage message={row.error.message} />
    if (!row.data) return <FormatNull />
    return (
        <ReadRow idRecord={props.idRecord} idRow={props.idRow}>
            <FormatText
                text={formatRow(row.data)}
                className="underline hover:no-underline"
            />
        </ReadRow>
    )
}
