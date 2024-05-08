import { ButtonGhost, ButtonPlain, PlainColors } from "@coulba/design/buttons"
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@coulba/design/overlays"
import { ReactElement, cloneElement, useState } from "react"


type ConfirmDialog = {
    children: ReactElement
    title: string
    description?: string
    submitLabel?: string
    color?: PlainColors
    onSubmit: () => Promise<boolean>
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
        <AlertDialog open={open} onOpenChange={(value) => setOpen(value)}>
            <AlertDialogTrigger asChild>
                {cloneElement(props.children, { onClick: () => setOpen(true) })}
            </AlertDialogTrigger>
            {!open ? null : (
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
            )}
        </AlertDialog>
    )
}
