import { FormatNull, FormatRecord } from "@monassosportive/design/formats"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { forwardRef } from "react"
import { AccountIcon } from "../account.icon"
import { ReadOneAccount } from "../readOneAccount/readOneAccount"
import { accountFormat } from "./account.format"


type FormatAccount = {
    account?: DashboardAccount.ReadOneAccountReturn | null
}

export const FormatAccount = forwardRef<HTMLButtonElement, FormatAccount>(
    function (props, ref) {
        if (!props.account) return <FormatNull />
        return (
            <ReadOneAccount
                account={props.account}
                ref={ref}
            >
                <FormatRecord
                    icon={<AccountIcon />}
                    textValue={accountFormat(props.account)}
                />
            </ReadOneAccount>
        )
    }
)
