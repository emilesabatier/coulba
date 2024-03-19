import { queryOptions } from "@tanstack/react-query"
import { readUsers } from "./readUsers"


export const userOptions = queryOptions({
    queryKey: ["users"],
    queryFn: readUsers
})
