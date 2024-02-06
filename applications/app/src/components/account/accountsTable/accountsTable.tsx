import { TableData } from "@monassosportive/design/layouts"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { useAccounts } from "../../../hooks/data/useAccounts"
import { Placeholder } from "../../layouts/placeholder"
import { Restricted } from "../../layouts/restricted"
import { accountColumns } from "./accountColumns"


export function AccountsTable() {
    const accounts = useAccounts()

    const accountsData = (accounts.data ?? [])
        .sort((a, b) => b.lastUpdatedAt?.localeCompare(a.lastUpdatedAt))

    return (
        <Placeholder error={accounts.error} isLoading={accounts.isLoading}>
            <Restricted
                resource="account"
                action="read"
                displayMessage
            >
                <TableData<DashboardAccount.ReadOneAccountReturn>
                    id="account"
                    columns={accountColumns}
                    data={accountsData}
                />
            </Restricted>
        </Placeholder>
    )
}
