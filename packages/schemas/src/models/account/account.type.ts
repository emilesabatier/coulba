import { accountInclude } from "./account.include.js"
import { accountModel } from "./account.model.js"


type accountInclude = keyof typeof accountInclude
type accountModel = typeof accountModel.$inferSelect

export type AccountReturned = Pick<accountModel, accountInclude>
