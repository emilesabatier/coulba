import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { userOptions } from "../../../services/api/auth/users/usersOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { formatUser } from "./formatUser"


type FormatUserWithFetch = {
    idUser: v.Output<typeof auth.users.get.return>["id"]
}

export function FormatUserWithFetch(props: FormatUserWithFetch) {
    const user = useQuery(userOptions(props.idUser))

    if (user.isLoading) return (<CircularLoader />)
    if (user.isError) return <ErrorMessage message={user.error.message} />
    if (!user.data) return <FormatNull />
    return <FormatText text={formatUser(user.data)} />
}
