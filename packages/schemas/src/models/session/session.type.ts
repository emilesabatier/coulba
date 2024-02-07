import { sessionInclude } from "./session.include"
import { sessionModel } from "./session.model"


type SessionInclude = keyof Readonly<typeof sessionInclude>
type SessionModel = typeof sessionModel.$inferSelect

export type SessionReturned = Pick<SessionModel, SessionInclude>
