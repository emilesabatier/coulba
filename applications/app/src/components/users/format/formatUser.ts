import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatUser(user: v.Output<typeof auth.users.get.return>) {
    return `${user.forename} ${user.surname}`
}
