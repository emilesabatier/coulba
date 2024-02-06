import { ComboboxMultiple } from "@monassosportive/design/inputs"
import { AccountReturned } from "@monassosportive/schemas/models"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { useAccounts } from "../../hooks/data/useAccounts"
import { Placeholder } from "../layouts/placeholder"
import { Restricted } from "../layouts/restricted"
import { accountFormat } from "./formatAccount/account.format"
import { FormatAccountWithFetch } from "./formatAccount/formatAccountWithFetch"


type Account = {
    idAccount: string
    account: AccountReturned
}
type AccountsComboboxMultiple = {
    value?: Pick<Account, "idAccount">[]
    onChange: (newValues?: Pick<Account, "idAccount">[]) => void
    autoFocus?: boolean
    filter?: (value: DashboardAccount.ReadOneAccountReturn) => boolean
}

export function AccountsComboboxMultiple(props: AccountsComboboxMultiple) {
    const accounts = useAccounts()

    const selectedValues = (accounts.data ?? [])
        .filter(!props.filter ? (() => true) : props.filter)
        .filter(x => props.value?.map(y => y.idAccount).includes(x.id))
        .map(x => ({ idAccount: x.id, account: x })).sort((a, b) => {
            const newA = accountFormat(a.account)
            const newB = accountFormat(b.account)
            if (!newA || !newB) return 0
            return newB.localeCompare(newA)
        })

    const options = accounts.data?.map(x => ({
        key: x.id,
        label: accountFormat(x)
    }))

    return (
        <Placeholder error={accounts.error} isLoading={accounts.isLoading}>
            <Restricted
                resource="account"
                action="read"
                displayMessage
            >
                <ComboboxMultiple<Account>
                    placeholder="Ajouter un compte"
                    emptyLabel="Aucun compte sélectionné"
                    selectedValues={selectedValues ?? []}
                    possibleValues={accounts.data?.map(x => ({ idAccount: x.id, account: x })) ?? []}
                    getId={(data) => data.idAccount}
                    options={options ?? []}
                    onChange={(data) => props.onChange(data.map(x => ({ idAccount: x.idAccount })))}
                    format={(data) => <FormatAccountWithFetch idAccount={data.idAccount} />}
                    autoFocus={props.autoFocus}
                />
            </Restricted>
        </Placeholder >
    )
}
