import { toast } from "@monassosportive/design/overlays"
import { DashboardAssociation, dashboardSchema } from "@monassosportive/schemas/routes"
import { ReactElement, forwardRef } from "react"
import { mutate } from "swr"
import { associationKey } from "../../../hooks/data/useAssociation"
import { updateAssociation } from "../../../services/routes/dashboard/association/updateAssociation"
import { UpdateOne } from "../../layouts/actions/updateOne"
import { Restricted } from "../../layouts/restricted"
import { UpdateAssociationIdentityForm } from "./updateAssociationIdentity.form"


type UpdateAssociationIdentity = {
    children: ReactElement
    association?: DashboardAssociation.ReadAssociationReturn
}

export const UpdateAssociationIdentity = forwardRef<HTMLButtonElement, UpdateAssociationIdentity>(
    function (props, ref) {

        const updateOne = async (data: DashboardAssociation.UpdateAssociationBody) => {
            const response = await updateAssociation({ body: data })
            if (!response.status) return false

            mutate(associationKey)
            toast({ title: "Association mise à jour.", variant: "success" })
            return true
        }

        if (!props.association) return null
        return (
            <Restricted
                resource="association"
                action="update"
            >
                <UpdateOne<DashboardAssociation.UpdateAssociationBody>
                    fRef={ref}
                    triggerElement={props.children}
                    title="Mettre à jour les informations"
                    submitLabel="Mettre à jour"
                    defaultValues={props.association}
                    onSubmit={(data) => updateOne(data)}
                    zodSchema={dashboardSchema.association.updateAssociationBody}
                    children={<UpdateAssociationIdentityForm />}
                />
            </Restricted>
        )
    }
)
