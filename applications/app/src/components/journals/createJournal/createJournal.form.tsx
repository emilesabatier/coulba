import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputText } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import * as v from "valibot"


export function CreateJournalForm() {
    const form = useFormContext<v.Output<typeof auth.journals.post.body>>()

    return (
        <Fragment>
            <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Libellé"
                            tooltip="Le libellé qui définit le journal ajouté."
                            isRequired
                        />
                        <FormControl>
                            <InputText
                                value={field.value}
                                onChange={field.onChange}
                                autoFocus
                            />
                        </FormControl>
                        <FormError />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="acronym"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Acronyme"
                            tooltip="L'acronyme qui sera affiché."
                            isRequired
                        />
                        <FormControl>
                            <InputText
                                value={field.value}
                                onChange={field.onChange}
                            />
                        </FormControl>
                        <FormError />
                    </FormItem>
                )}
            />
        </Fragment>
    )
}
