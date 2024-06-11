import { FormatNull, FormatText } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { accountOptions } from "../../../services/api/auth/accounts/accountsOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { ReadAccount } from "../read/readAccount"
import { formatAccount } from "./formatAccount"


type FormatAccountWithFetch = {
    idAccount: v.Output<typeof auth.accounts.get.return>["id"]
}

export function FormatAccountWithFetch(props: FormatAccountWithFetch) {
    const account = useQuery(accountOptions(props.idAccount))

    if (account.isLoading) return (<CircularLoader />)
    if (account.isError) return <ErrorMessage message={account.error.message} />
    if (!account.data) return <FormatNull />
    return (
        <ReadAccount idAccount={props.idAccount}>
            <FormatText
                text={formatAccount(account.data)}
                className="underline hover:no-underline"
            />
        </ReadAccount>
    )
}
