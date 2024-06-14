import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { ReactElement } from "react"
import * as v from "valibot"
import { sendInvitation } from "../../../services/api/auth/users/sendInvitation"
import { ConfirmDialog } from "../../layouts/actions/confirmDialog"


type SendInvitation = {
    user: v.Output<typeof auth.users.get.return>
    children: ReactElement
}

export function SendInvitation(props: SendInvitation) {
    if (props.user.isInvitationValidated === null || props.user.isInvitationValidated === true) return null
    return (
        <ConfirmDialog
            title="Envoyer l'invitation ?"
            description={"Attention, cette action enverra un email d'invitation à l'email renseigné pour l'utilisateur concerné."}
            submitLabel="Envoyer"
            color="success"
            onSubmit={async () => {
                const response = await sendInvitation({
                    params: { idUser: props.user.id }
                })
                if (!response) return false

                toast({ title: "Invitation envoyée", variant: "success" })

                return true
            }}
            children={props.children}
        />
    )
}
