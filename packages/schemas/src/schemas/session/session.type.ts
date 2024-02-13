import { sessions } from "../../models"
import { sessionInclude } from "./session.include"


type SessionInclude = keyof Readonly<typeof sessionInclude>
type SessionModel = typeof sessions.$inferSelect

export type SessionReturned = Pick<SessionModel, SessionInclude>
