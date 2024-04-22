import { transactions } from "../../models/transactions.model"
import { transactionInclude } from "./transaction.include"


type transactionInclude = keyof typeof transactionInclude
type transactions = typeof transactions.$inferSelect

export type TransactionReturned = Pick<transactions, transactionInclude>
