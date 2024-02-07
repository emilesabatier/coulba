import { accountInclude } from "./account.include"
import { accountModel } from "./account.model"


type accountInclude = keyof typeof accountInclude
type accountModel = typeof accountModel.$inferSelect

export type AccountReturned = Pick<accountModel, accountInclude>
