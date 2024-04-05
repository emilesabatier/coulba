import { accounts } from "../../models/index.js"
import { accountInclude } from "./account.include.js"


type accountInclude = keyof typeof accountInclude
type accounts = typeof accounts.$inferSelect

export type AccountReturned = Pick<accounts, accountInclude>
