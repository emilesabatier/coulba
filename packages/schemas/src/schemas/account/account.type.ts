import { accounts } from "../../models"
import { accountInclude } from "./account.include"


type accountInclude = keyof typeof accountInclude
type accounts = typeof accounts.$inferSelect

export type AccountReturned = Pick<accounts, accountInclude>
