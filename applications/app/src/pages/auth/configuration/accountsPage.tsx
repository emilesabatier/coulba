import { ButtonOutline } from "@coulba/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { AccountsList } from "../../../components/accounts/accountsList"
import { CreateAccount } from "../../../components/accounts/createAccount/createAccount"
import { Main } from "../../../components/layouts/main/main"
import { useCurrentYear } from "../../../contexts/currentYear/useCurrentYear"


export function AccountsPage() {
    const currentYear = useCurrentYear()

    if (!currentYear.data) return null
    return (
        <Main.Root>
            <Main.Header
                title="Plan des comptes"
                description="Vous retrouvez sur cette page le plan des comptes de l'entreprise que vous pouvez modifier selon votre besoin. Veuillez à bien savoir ce que vous faites avant de supprimer des données."
            >
                <CreateAccount>
                    <ButtonOutline
                        icon={<IconPlus />}
                        text="Ajouter un compte"
                    />
                </CreateAccount>
            </Main.Header>
            <Main.Content>
                <AccountsList />
            </Main.Content>
        </Main.Root>
    )
}
