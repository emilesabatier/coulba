import { ButtonGhost, ButtonPlain } from "@coulba/design/buttons"
import { FormRoot } from "@coulba/design/forms"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@coulba/design/overlays"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { ReactElement, Ref, cloneElement, useState } from "react"
import { DefaultValues, useForm } from "react-hook-form"
import * as v from "valibot"


type Update<T extends v.ObjectSchema<v.ObjectEntries>> = {
    triggerElement: ReactElement
    title: string
    values?: v.Output<T>
    defaultValues?: DefaultValues<v.Output<T>>
    validationSchema: T
    onSubmit: (data: v.Output<T>) => Promise<boolean>
    submitLabel: string
    children: ReactElement
    fRef?: Ref<HTMLButtonElement>
}

export function Update<T extends v.ObjectSchema<v.ObjectEntries>>(props: Update<T>) {
    const [open, setOpen] = useState(false)

    const form = useForm<v.Output<T>>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        values: props.values,
        defaultValues: props.defaultValues,
        resolver: valibotResolver(props.validationSchema),
    })

    const onSubmit = async () => {

        const triggerResponse = await form.trigger()
        if (import.meta.env.VITE_ENV !== "production") {
            console.log(form.getValues(), form.formState.errors)
        }
        if (!triggerResponse) return

        const submitResponse = await props.onSubmit(form.getValues())
        if (!submitResponse) return

        setOpen(false)
    }

    const onCancel = async () => {
        // if (formState.isDirty) return console.log("dirty")
        setOpen(false)
    }

    // useEffect(() => {
    //     console.log(form.watch(), form.formState.errors)
    // }, [form.watch()])

    return (
        <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
            <DialogTrigger asChild>
                {cloneElement(props.triggerElement, { onClick: () => setOpen(true), ref: props.fRef })}
            </DialogTrigger>
            {!open ? null : (
                <DialogContent onInteractOutside={() => onCancel()}>
                    <DialogHeader>
                        <DialogTitle>{props.title}</DialogTitle>
                    </DialogHeader>
                    <FormRoot {...form}>
                        <form className="overflow-y-auto overflow-x-hidden h-full flex flex-col justify-start items-stretch gap-2 md:gap-4 p-4 md:p-8 bg-white">
                            {props.children}
                        </form>
                    </FormRoot>
                    <DialogFooter>
                        <ButtonGhost onClick={() => onCancel()} text="Annuler" />
                        <ButtonPlain
                            onClick={() => onSubmit()}
                            text={props.submitLabel}
                            loader
                        />
                    </DialogFooter>
                </DialogContent>
            )}
        </Dialog>
    )
}
