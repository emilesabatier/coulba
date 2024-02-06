import { sessionInclude } from "./session.include.js"
import { sessionModel } from "./session.model.js"


type SessionInclude = keyof Readonly<typeof sessionInclude>
type SessionModel = typeof sessionModel.$inferSelect

export type SessionReturned = Pick<SessionModel, SessionInclude>
