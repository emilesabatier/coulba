import { toast } from "@monassosportive/design/overlays"
import { DashboardAccount, dashboardSchema } from "@monassosportive/schemas/routes"
import { ReactElement, forwardRef } from "react"
import { mutate } from "swr"
import { accountsKey } from "../../../hooks/data/useAccounts"
import { useProfile } from "../../../hooks/useProfile"
import { capitalize } from "../../../services/capitalize.service"
import { updateOneAccount } from "../../../services/routes/dashboard/account/updateOneAccount"
import { UpdateOne } from "../../layouts/actions/updateOne"
import { Placeholder } from "../../layouts/placeholder"
import { Restricted } from "../../layouts/restricted"
import { UpdateOneAccountForm } from "./updateOneAccountForm"


type UpdateOneAccount = {
    children: ReactElement
    account: DashboardAccount.ReadOneAccountReturn
}

export const UpdateOneAccount = forwardRef<HTMLButtonElement, UpdateOneAccount>(
    function (props, ref) {
        const profile = useProfile()

        const updateOne = async (data: DashboardAccount.UpdateOneAccountBody) => {
            const response = await updateOneAccount({ params: { id: props.account.id }, body: data })
            if (!response.status) return false

            mutate(accountsKey)
            toast({ title: "Compte utilisateur mis à jour !", variant: "success" })
            return true
        }

        if (props.account.isAdmin && profile.data?.id === props.account.id) return null
        return (
            <Placeholder error={profile.error} isLoading={profile.isLoading}>
                <Restricted
                    resource="account"
                    action="update"
                >
                    <UpdateOne<DashboardAccount.UpdateOneAccountBody>
                        fRef={ref}
                        triggerElement={props.children}
                        title="Mettre à jour le compte utilisateur"
                        submitLabel="Mettre à jour"
                        defaultValues={{
                            ...props.account,
                            contact: {
                                surname: capitalize(props.account.contact.surname),
                                forename: capitalize(props.account.contact.forename),
                                phone: {
                                    prefix: props.account.contact.phonePrefix,
                                    number: props.account.contact.phoneNumber
                                }
                            }
                        }}
                        onSubmit={(data) => updateOne(data)}
                        zodSchema={dashboardSchema.account.updateOneAccountBody}
                        children={<UpdateOneAccountForm />}
                    />
                </Restricted>
            </Placeholder>
        )
    }
)
