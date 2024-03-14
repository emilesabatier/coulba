import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDate, InputText } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import * as v from "valibot"


export function UpdateYearForm() {
    const form = useFormContext<v.Output<typeof auth.years.post.body>>()

    return (
        <Fragment>
            <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Libellé"
                            tooltip="Le libellé qui définit l'exercice ajoutée."
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
                name="startingOn"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Date de début"
                            tooltip="La date à laquelle démarre l'exercice."
                            isRequired
                        />
                        <FormControl>
                            <InputDate
                                value={field.value}
                                onChange={field.onChange}
                            />
                        </FormControl>
                        <FormError />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="endingOn"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Date de fin"
                            tooltip="La date à laquelle finit l'exercice."
                            isRequired
                        />
                        <FormControl>
                            <InputDate
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
