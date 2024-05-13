import { auth } from "@coulba/schemas/routes"
import * as v from "valibot"


export function formatComputation(computation: v.Output<typeof auth.computations.get.return>) {
    return `${computation.number} - ${computation.label}`
}
