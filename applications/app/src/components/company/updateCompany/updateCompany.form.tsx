import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputSiren, InputText } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import * as v from "valibot"


export function UpdateCompanyForm() {
    const form = useFormContext<v.Output<typeof auth.companies.put.body>>()

    return (
        <Fragment>
            <FormField
                control={form.control}
                name="siren"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Numéro de SIREN"
                            tooltip="Le numéro officiel qui vous a été attribué à la création de l'entreprise."
                            isRequired
                        />
                        <FormControl>
                            <InputSiren
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
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Nom de l'entreprise"
                            tooltip="Le nom ou la raison sociale de l'entreprise."
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
            <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Adresse"
                            tooltip="Du siège social ou autre."
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
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Email"
                            tooltip="L'email de contact de l'entreprise, sur lequel vous recevrez les informations relatives à l'utilisation de l'application."
                            isRequired
                        />
                        <FormControl>
                            <InputText
                                value={field.value}
                                onChange={field.onChange}
                                inputMode="email"
                            />
                        </FormControl>
                        <FormError />
                    </FormItem>
                )}
            />
        </Fragment>
    )
}
