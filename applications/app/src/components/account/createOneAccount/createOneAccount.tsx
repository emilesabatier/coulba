import { toast } from "@monassosportive/design/overlays"
import { DashboardAccount, dashboardSchema } from "@monassosportive/schemas/routes"
import { ReactElement, forwardRef } from "react"
import { mutate } from "swr"
import { accountsKey } from "../../../hooks/data/useAccounts"
import { createOneAccount } from "../../../services/routes/dashboard/account/createOneAccount"
import { CreateOne } from "../../layouts/actions/createOne"
import { Restricted } from "../../layouts/restricted"
import { CreateOneAccountForm } from "./createOneAccountForm"


type CreateOneAccount = {
    children: ReactElement
}

export const CreateOneAccount = forwardRef<HTMLButtonElement, CreateOneAccount>(
    function (props, ref) {

        const createOne = async (data: DashboardAccount.CreateOneAccountBody) => {
            const response = await createOneAccount({ body: data })
            if (!response.status) return false

            mutate(accountsKey)
            toast({ title: "Nouveau compte utilisateur ajouté !", variant: "success" })
            return true
        }

        return (
            <Restricted
                resource="account"
                action="create"
            >
                <CreateOne<DashboardAccount.CreateOneAccountBody>
                    fRef={ref}
                    triggerElement={props.children}
                    title="Ajouter un compte utilisateur"
                    submitLabel="Ajouter"
                    defaultValues={{}}
                    onSubmit={(data) => createOne(data)}
                    zodSchema={dashboardSchema.account.createOneAccountBody}
                    children={<CreateOneAccountForm />}
                />
            </Restricted>
        )
    }
)
