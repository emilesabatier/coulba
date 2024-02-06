import { ButtonPlain, ButtonSubtle } from "@monassosportive/design/buttons"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@monassosportive/design/overlays"
import { ReactElement, Ref, cloneElement, useState } from "react"


type DeleteOne = {
    triggerElement: ReactElement
    title: string
    description?: string
    onSubmit: () => Promise<boolean>
    fRef: Ref<HTMLButtonElement> | undefined
}

export function DeleteOne(props: DeleteOne) {
    const [open, setOpen] = useState(false)

    async function onSubmit() {
        const submitResponse = await props.onSubmit()
        if (!submitResponse) return

        setOpen(false)
    }

    async function onCancel() {
        setOpen(false)
    }

    return (
        <AlertDialog open={open} onOpenChange={(open) => setOpen(open)}>
            <AlertDialogTrigger asChild>
                {cloneElement(props.triggerElement, { onClick: () => setOpen(true), ref: props.fRef })}
            </AlertDialogTrigger>
            {
                !open ? null : (
                    <AlertDialogContent className="max-w-sm md:max-w-sm">
                        <AlertDialogHeader>
                            <AlertDialogTitle>{props.title}</AlertDialogTitle>
                            <AlertDialogDescription>{props.description ?? "Attention, les données seront définitivement supprimées."}</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                            <div className="flex flex-row justify-end items-center gap-2">
                                <ButtonSubtle onClick={() => onCancel()} text="Annuler" />
                                <ButtonPlain
                                    color="error"
                                    onClick={() => onSubmit()}
                                    text="Supprimer"
                                    loader
                                />
                            </div>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                )
            }
        </AlertDialog>
    )
}
