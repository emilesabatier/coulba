import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { transactionOptions } from "../../../services/api/auth/transactions/transactionsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { ReadTransaction } from "../read/readTransaction"
import { formatTransaction } from "./formatTransaction"


type FormatTransactionWithFetch = {
    idTransaction: v.Output<typeof auth.transactions.get.return>["id"]
}

export function FormatTransactionWithFetch(props: FormatTransactionWithFetch) {
    const transaction = useQuery(transactionOptions(props.idTransaction))

    if (transaction.isLoading) return (<CircularLoader />)
    if (transaction.isError) return <ErrorMessage message={transaction.error.message} />
    if (!transaction.data) return <FormatNull />
    return (
        <ReadTransaction idTransaction={props.idTransaction}>
            <FormatText
                text={formatTransaction(transaction.data)}
                className="underline hover:no-underline"
            />
        </ReadTransaction>
    )
}
