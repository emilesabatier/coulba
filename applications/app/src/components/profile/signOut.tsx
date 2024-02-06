import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@monassosportive/design/overlays"
import { ReactElement, forwardRef, useState } from "react"
import { useSession } from "../../contexts/session/useSession"


type SignOut = {
    children: ReactElement
}

export const SignOut = forwardRef<HTMLButtonElement, SignOut>(
    (_props, ref) => {

        const [open, setOpen] = useState(false)
        const session = useSession()

        return (
            <AlertDialog open={open} onOpenChange={(open) => setOpen(open)}>
                <AlertDialogTrigger ref={ref} asChild>
                    {_props.children}
                </AlertDialogTrigger>
                <AlertDialogContent className="max-w-sm md:max-w-sm">
                    <AlertDialogHeader>
                        <AlertDialogTitle>Se déconnecter ?</AlertDialogTitle>
                        <AlertDialogDescription>Cela fermera la session en cours.</AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel onClick={() => setOpen(false)} />
                        <AlertDialogAction onClick={async () => { await session.signOut() }} submitLabel="Se déconnecter" color="error" />
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        )
    }
)
