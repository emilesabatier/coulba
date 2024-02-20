import { ButtonGhost, ButtonPlain, PlainColors } from "@coulba/design/buttons"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@coulba/design/overlays"
import { ReactElement, Ref, cloneElement, useState } from "react"


type ConfirmDialog = {
    triggerElement: ReactElement
    title: string
    description?: string
    submitLabel?: string
    color?: PlainColors
    onSubmit: () => Promise<boolean>
    fRef: Ref<HTMLButtonElement> | undefined
}

export function ConfirmDialog(props: ConfirmDialog) {
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
            <AlertDialogContent className="max-w-sm md:max-w-sm">
                <AlertDialogHeader>
                    <AlertDialogTitle>{props.title}</AlertDialogTitle>
                    <AlertDialogDescription>{props.description}</AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <div className="flex flex-row justify-end items-center gap-2">
                        <ButtonGhost onClick={() => onCancel()} text="Annuler" />
                        <ButtonPlain
                            color={props.color ?? "error"}
                            onClick={() => onSubmit()}
                            text={props.submitLabel ?? "Supprimer"}
                            loader
                        />
                    </div>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}
