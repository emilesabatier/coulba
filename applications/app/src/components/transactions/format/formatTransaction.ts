import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatTransaction(transaction: v.Output<typeof auth.transactions.get.return>) {
    return transaction.label
}
