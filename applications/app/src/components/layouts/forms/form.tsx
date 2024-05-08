import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormRoot } from "@coulba/design/forms"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { IconChevronLeft } from "@tabler/icons-react"
import { ReactElement } from "react"
import { DefaultValues, UseFormReturn, useForm } from "react-hook-form"
import * as v from "valibot"


type Form<T extends v.ObjectSchema<v.ObjectEntries>> = {
    values?: v.Output<T>
    defaultValues?: DefaultValues<v.Output<T>>
    validationSchema: T
    onCancel: () => void
    cancelLabel: string
    onSubmit: (data: v.Output<T>) => Promise<boolean>
    submitLabel: string
    children: (form: UseFormReturn<v.Output<T>>) => ReactElement | ReactElement[]
}

export function Form<T extends v.ObjectSchema<v.ObjectEntries>>(props: Form<T>) {

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
        if (!triggerResponse) {
            if (import.meta.env.VITE_ENV !== "production") console.log(form.getValues(), form.formState.errors)
            return
        }

        const submitResponse = await props.onSubmit(form.getValues())
        if (!submitResponse) return

        form.reset({}, {
            keepValues: false,
            keepDirtyValues: false,
            keepDefaultValues: false
        })
    }

    return (
        <FormRoot {...form}>
            <form className="w-[768px] overflow-y-auto overflow-x-hidden flex flex-col justify-start items-stretch gap-4">
                <div className="flex justify-start items-center gap-1">
                    <ButtonOutline
                        onClick={() => props.onCancel()}
                        icon={<IconChevronLeft />}
                        text={props.cancelLabel}
                    />
                    <ButtonPlain
                        onClick={() => onSubmit()}
                        text={props.submitLabel}
                        loader
                    />
                </div>
                <div className="flex flex-col justify-start items-stretch gap-4">
                    {props.children(form)}
                </div>
            </form>
        </FormRoot>
    )
}
