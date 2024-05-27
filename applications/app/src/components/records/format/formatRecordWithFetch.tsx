import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { recordOptions } from "../../../services/api/auth/records/recordsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { ReadRecord } from "../read/readRecord"
import { formatRecord } from "./formatRecord"


type FormatRecordWithFetch = {
    idTransaction: v.Output<typeof auth.transactions.get.return>["id"]
    idRecord: v.Output<typeof auth.records.get.return>["id"]
}

export function FormatRecordWithFetch(props: FormatRecordWithFetch) {
    const record = useQuery(recordOptions(props.idRecord))

    if (record.isLoading) return (<CircularLoader />)
    if (record.isError) return <ErrorMessage message={record.error.message} />
    if (!record.data) return <FormatNull />
    return (
        <ReadRecord idTransaction={props.idTransaction} idRecord={props.idRecord}>
            <FormatText
                text={formatRecord(record.data)}
                className="underline hover:no-underline"
            />
        </ReadRecord>
    )
}
