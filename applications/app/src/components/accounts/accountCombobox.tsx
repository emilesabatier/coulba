import { InputCombobox } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { useQuery } from "@tanstack/react-query"
import * as v from "valibot"
import { readAccounts } from "../../services/api/auth/accounts/readAccounts"
import { formatAccount } from "./format/formatAccount"


type AccountCombobox = {
    value?: string | null
    onChange: (value?: string | null) => void
    filter?: (value: v.Output<typeof auth.accounts.get.return>) => boolean
    isDisabled?: boolean
    autoFocus?: boolean
}

export function AccountCombobox(props: AccountCombobox) {
    const accounts = useQuery({
        queryKey: ["accounts"],
        queryFn: readAccounts
    })

    const options = (accounts.data ?? [])
        .filter(props.filter ?? (() => true))
        .map((x) => ({
            key: x.id,
            label: formatAccount(x)
        }))
        .sort((a, b) => a.label.localeCompare(b.label))

    return (
        <InputCombobox
            value={props.value}
            onChange={props.onChange}
            placeholder="Choisir le compte"
            options={options}
            isDisabled={props.isDisabled}
            autoFocus={props.autoFocus}
            isLoading={accounts.isLoading}
        />
    )
}
