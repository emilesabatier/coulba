import { queryOptions } from "@tanstack/react-query"
import { readUsers } from "./readUsers"
import { readUser } from "./readUser"


export const usersOptions = queryOptions({
    queryKey: ["users"],
    queryFn: readUsers
})

export const userOptions = (idUser: string) => queryOptions({
    queryKey: ["transactions", idUser],
    queryFn: () => readUser({ params: { idUser: idUser } })
})
