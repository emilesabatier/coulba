import { toast } from "@monassosportive/design/overlays"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { ReactElement, forwardRef } from "react"
import { mutate } from "swr"
import { accountsKey } from "../../../hooks/data/useAccounts"
import { useProfile } from "../../../hooks/useProfile"
import { deleteOneAccount } from "../../../services/routes/dashboard/account/deleteOneAccount"
import { DeleteOne } from "../../layouts/actions/deleteOne"
import { Placeholder } from "../../layouts/placeholder"
import { Restricted } from "../../layouts/restricted"


type DeleteOneAccount = {
    children: ReactElement
    account: DashboardAccount.ReadOneAccountReturn
}

export const DeleteOneAccount = forwardRef<HTMLButtonElement, DeleteOneAccount>(
    function (props, ref) {
        const profile = useProfile()

        const deleteOne = async (id: string) => {
            const response = await deleteOneAccount({ params: { id } })
            if (!response.status) return false

            mutate(accountsKey)
            toast({ title: "Compte utilisateur supprimé.", variant: "success" })
            return true
        }

        if (props.account.isAdmin && profile.data?.id === props.account.id) return null
        return (
            <Placeholder error={profile.error} isLoading={profile.isLoading}>
                <Restricted
                    resource="account"
                    action="delete"
                >
                    <DeleteOne
                        fRef={ref}
                        triggerElement={props.children}
                        title="Supprimer l'utilisateur ?"
                        onSubmit={() => deleteOne(props.account.id)}
                    />
                </Restricted>
            </Placeholder>
        )
    }
)
