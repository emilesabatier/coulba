import { sessions } from "../../models/index.js"
import { sessionInclude } from "./session.include.js"


type SessionInclude = keyof Readonly<typeof sessionInclude>
type SessionModel = typeof sessions.$inferSelect

export type SessionReturned = Pick<SessionModel, SessionInclude>
