import { InputCombobox } from "@monassosportive/design/inputs"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { useAccounts } from "../../hooks/data/useAccounts"
import { Placeholder } from "../layouts/placeholder"
import { Restricted } from "../layouts/restricted"
import { accountFormat } from "./formatAccount/account.format"



type AccountCombobox = {
    value?: string | null
    onChange: (value?: string | null) => void
    filter?: (value: DashboardAccount.ReadOneAccountReturn) => boolean
    isDisabled?: boolean
}

export function AccountCombobox(props: AccountCombobox) {
    const accounts = useAccounts()

    return (
        <Placeholder error={accounts.error} isLoading={accounts.isLoading}>
            <Restricted
                resource="account"
                action="read"
                displayMessage
            >
                <InputCombobox<DashboardAccount.ReadOneAccountReturn>
                    value={props.value}
                    onChange={props.onChange}
                    placeholder="Choisir le compte"
                    options={accounts.data?.filter(props.filter ?? (() => true))?.map(x => ({
                        key: x.id,
                        label: accountFormat(x)
                    }))}
                    format={(data) => accountFormat(data)}
                    isDisabled={props.isDisabled}
                />
            </Restricted>
        </Placeholder>
    )
}
