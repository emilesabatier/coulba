import { formatDateTime } from "@monassosportive/design/formats"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, toast } from "@monassosportive/design/overlays"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { Fragment, ReactElement, cloneElement, forwardRef, useState } from "react"
import { useProfile } from "../../../hooks/useProfile"
import { sendAccountCredentials } from "../../../services/routes/dashboard/account/sendCredentials"
import { Placeholder } from "../../layouts/placeholder"
import { Restricted } from "../../layouts/restricted"


type SendCredentials = {
    children: ReactElement
    account: DashboardAccount.ReadOneAccountReturn
}

export const SendCredentials = forwardRef<HTMLButtonElement, SendCredentials>(
    function (props, ref) {

        const [open, setOpen] = useState(false)
        const profile = useProfile()

        async function sendCredentials(id: string) {
            const response = await sendAccountCredentials({ params: { id: id }, body: { emailAddress: props.account.emailAddress } })
            if (!response.status) return false


            toast({ title: "Identifiants envoyés !", variant: "success" })
            return true
        }

        if (props.account.isAdmin && profile.data?.id === props.account.id) return null
        return (
            <Placeholder error={profile.error} isLoading={profile.isLoading}>
                <Restricted
                    resource="account"
                    action="send_credentials"
                >
                    <AlertDialog open={open} onOpenChange={(open) => setOpen(open)}>
                        <AlertDialogTrigger asChild>
                            {cloneElement(props.children, { onClick: () => setOpen(open), ref: ref })}
                        </AlertDialogTrigger>
                        <AlertDialogContent className="max-w-sm md:max-w-sm">
                            <AlertDialogHeader>
                                <AlertDialogTitle>Envoi des identifiants</AlertDialogTitle>
                                <AlertDialogDescription>
                                    <span className="inline-flex flex-col justify-start items-start gap-2">
                                        <span>
                                            {!props.account.lastCredentialsSentAt ? "Les identifiants n'ont pour le moment jamais été envoyés." : (
                                                <Fragment>
                                                    Date du dernier envoi: <span className="font-bold">{formatDateTime(props.account.lastCredentialsSentAt)}</span>.
                                                </Fragment>
                                            )}
                                        </span>
                                        <span>
                                            Cela va générer un nouveau mot de passe et rendre l&apos;ancien obsolète.
                                        </span>
                                    </span>
                                </AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                                <AlertDialogCancel onClick={() => setOpen(false)} />
                                <AlertDialogAction onClick={() => sendCredentials(props.account.id)} submitLabel="Envoyer" color="success" />
                            </AlertDialogFooter>
                        </AlertDialogContent>
                    </AlertDialog>
                </Restricted>
            </Placeholder>
        )
    }
)
