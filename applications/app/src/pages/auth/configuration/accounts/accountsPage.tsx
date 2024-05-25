import { AccountsList } from "../../../../components/accounts/accountsList"
import { Main } from "../../../../components/layouts/main"
import { useCurrentYear } from "../../../../contexts/currentYear/useCurrentYear"


export function AccountsPage() {
    const currentYear = useCurrentYear()

    if (!currentYear.data) return null
    return (
        <Main>
            <AccountsList />
        </Main>
    )
}
