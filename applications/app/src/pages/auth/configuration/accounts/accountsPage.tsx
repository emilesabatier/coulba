import { AccountsList } from "../../../../components/accounts/accountsList"
import { Main } from "../../../../components/layouts/main/main"
import { useCurrentYear } from "../../../../contexts/currentYear/useCurrentYear"


export function AccountsPage() {
    const currentYear = useCurrentYear()

    if (!currentYear.data) return null
    return (
        <Main.Root>
            <Main.Header
                title="Plan des comptes"
                description="Vous retrouvez sur cette page le plan des comptes de l'entreprise que vous pouvez modifier selon votre besoin. Veuillez à bien savoir ce que vous faites avant de supprimer des données."
            />
            <Main.Content>
                <AccountsList />
            </Main.Content>
        </Main.Root>
    )
}
