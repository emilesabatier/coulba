import { queryOptions } from "@tanstack/react-query"
import { readUser } from "./readUser"
import { readUsers } from "./readUsers"


export const usersOptions = queryOptions({
    queryKey: ["users"],
    queryFn: readUsers
})

export const userOptions = (idUser: string) => queryOptions({
    queryKey: ["users", idUser],
    queryFn: () => readUser({ params: { idUser: idUser } })
})
