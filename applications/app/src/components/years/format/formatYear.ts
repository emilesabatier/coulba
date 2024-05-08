import { auth } from "@coulba/schemas/routes";
import * as v from "valibot";


export function formatYear(year: v.Output<typeof auth.years.get.return>) {
    return year.label
}
