import { Option } from "@monassosportive/design/inputs"
import { FilterRecord } from "@monassosportive/design/layouts"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { Column } from "@tanstack/react-table"
import { useAccounts } from "../../hooks/data/useAccounts"
import { Placeholder } from "../layouts/placeholder"
import { Restricted } from "../layouts/restricted"
import { accountFormat } from "./formatAccount/account.format"


export function FilterAccount({ column }: { column?: Column<DashboardAccount.ReadOneAccountReturn, Option> }) {
    const accounts = useAccounts()

    return (
        <Placeholder error={accounts.error} isLoading={accounts.isLoading}>
            <Restricted
                resource="account"
                action="read"
                displayMessage
            >
                <FilterRecord<DashboardAccount.ReadOneAccountReturn>
                    column={column}
                    placeholder="Choisir le compte"
                    options={accounts.data?.map(x => ({
                        key: x.id,
                        label: accountFormat(x)
                    }))}
                    format={(data) => accountFormat(data)}
                />
            </Restricted>
        </Placeholder>
    )
}
