'use client'

import { ButtonPlain } from "@monassosportive/design/buttons"
import { IconPlus } from "@tabler/icons-react"
import { AccountsTable } from "../../../components/account/accountsTable/accountsTable"
import { CreateOneAccount } from "../../../components/account/createOneAccount/createOneAccount"
import { Content } from "../../../components/layouts/content/content"


export function AccountsPage() {
    return (
        <Content.Root>
            <CreateOneAccount>
                <ButtonPlain
                    text="Ajouter un compte utilisateur"
                    icon={<IconPlus />}
                />
            </CreateOneAccount>
            <AccountsTable />
        </Content.Root>
    )
}
