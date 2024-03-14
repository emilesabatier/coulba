import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputInteger, InputText } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import * as v from "valibot"
import { AccountCombobox } from "../accountCombobox"


export function CreateAccountForm() {
    const form = useFormContext<v.Output<typeof auth.accounts.post.body>>()

    return (
        <Fragment>
            <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Libellé"
                            tooltip="Le libellé qui définit le compte ajouté."
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
                name="number"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Numéro"
                            tooltip="Le libellé qui définit l'opération ajoutée."
                            isRequired
                        />
                        <FormControl>
                            <InputInteger
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
                name="idAccountParent"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Compte parent"
                            tooltip="Le compte parent du compte créé."
                        />
                        <FormControl>
                            <AccountCombobox
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
