import { zodResolver } from "@hookform/resolvers/zod"
import { ButtonPlain, ButtonSubtle } from "@monassosportive/design/buttons"
import { FormRoot } from "@monassosportive/design/forms"
import { useDeviceDetect } from "@monassosportive/design/hooks"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@monassosportive/design/overlays"
import { ReactElement, Ref, cloneElement, useState } from "react"
import { DefaultValues, FieldValues, useForm } from "react-hook-form"
import { ZodType } from "zod"


type UpdateOne<T extends FieldValues> = {
    triggerElement: ReactElement
    title: string
    values?: T
    defaultValues?: DefaultValues<T>
    zodSchema: ZodType<T>
    onSubmit: (data: T) => Promise<boolean>
    submitLabel: string
    children: ReactElement
    fRef: Ref<HTMLButtonElement> | undefined
}

export function UpdateOne<T extends FieldValues>(props: UpdateOne<T>) {
    const { isMobile } = useDeviceDetect()
    const [open, setOpen] = useState(false)

    const form = useForm<T>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        values: props.values,
        defaultValues: props.defaultValues,
        resolver: zodResolver(props.zodSchema),
    })

    const onSubmit = async () => {
        const triggerResponse = await form.trigger()
        console.log(form.formState)

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
        <Sheet open={open} onOpenChange={(open) => setOpen(open)}>
            <SheetTrigger asChild>
                {cloneElement(props.triggerElement, { onClick: () => setOpen(true), ref: props.fRef })}
            </SheetTrigger>
            {!open ? null : (
                <SheetContent onInteractOutside={() => onCancel()} side={isMobile ? "bottom" : "right"}>
                    <SheetHeader>
                        <SheetTitle>{props.title}</SheetTitle>
                    </SheetHeader>
                    <FormRoot {...form}>
                        <form className="overflow-hidden grid grid-rows-[auto_min-content] gap-4 md:gap-8">
                            <div className="flex flex-col justify-start items-stretch gap-2 md:gap-4 px-2 pt-2 md:px-4 md:pt-4 overflow-y-auto overflow-x-hidden">
                                {props.children}
                            </div>
                            <div className="flex flex-row justify-end items-center gap-2">
                                <ButtonSubtle onClick={() => onCancel()} text="Annuler" />
                                <ButtonPlain
                                    onClick={() => onSubmit()}
                                    text={props.submitLabel}
                                    loader
                                />
                            </div>
                        </form>
                    </FormRoot>
                </SheetContent>
            )}
        </Sheet>
    )
}
