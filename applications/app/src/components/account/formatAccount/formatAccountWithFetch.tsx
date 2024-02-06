import { forwardRef } from "react"
import { FormatAccount } from "./formatAccount"
import { useAccounts } from "../../../hooks/data/useAccounts"
import { Placeholder } from "../../layouts/placeholder"
import { Restricted } from "../../layouts/restricted"


type FormatAccountWithFetch = {
    idAccount: string
}

export const FormatAccountWithFetch = forwardRef<HTMLButtonElement, FormatAccountWithFetch>(
    function (props, ref) {
        const accounts = useAccounts()
        const account = accounts?.data?.find(x => x.id === props.idAccount)

        return (
            <Placeholder error={accounts.error} isLoading={accounts.isLoading}>
                <Restricted
                    resource="account"
                    action="read"
                >
                    <FormatAccount account={account} ref={ref} />
                </Restricted>
            </Placeholder>
        )
    }
)
