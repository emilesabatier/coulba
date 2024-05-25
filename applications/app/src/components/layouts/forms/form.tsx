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

        // form.reset({}, {
        //     keepValues: false,
        //     keepDirtyValues: false,
        //     keepDefaultValues: false
        // })
    }

    return (
        <FormRoot {...form}>
            <form className="grid grid-cols-1 grid-rows-[max-content_auto]">
                <div className="flex justify-start items-center gap-1.5 p-3 border-b border-neutral/10">
                    <ButtonOutline
                        onClick={() => props.onCancel()}
                        icon={<IconChevronLeft />}
                    />
                    <ButtonPlain
                        onClick={() => onSubmit()}
                        text={props.submitLabel}
                        loader
                    />
                </div>
                <div className="w-[768px] flex flex-col justify-start items-stretch gap-6 p-6 overflow-auto">
                    {props.children(form)}
                </div>
            </form>
        </FormRoot>
    )
}
