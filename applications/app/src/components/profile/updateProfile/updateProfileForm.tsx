import { FormControl, FormError, FormField, FormItem, FormLabel } from "@monassosportive/design/forms"
import { InputPhone, InputText } from "@monassosportive/design/inputs"
import { DashboardProfile } from "@monassosportive/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"


export function UpdateProfileForm() {
    const form = useFormContext<DashboardProfile.UpdateProfileBody>()
    return (
        <Fragment>
            <FormField
                control={form.control}
                name="contact.surname"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Nom"
                            tooltip="Le nom de famille associé à votre compte."
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
                name="contact.forename"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Prénom"
                            tooltip="Le prénom associé à votre compte."
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
            <FormField
                control={form.control}
                name="contact.phone"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Numéro de téléphone"
                            tooltip="Le numéro de téléphone de votre compte (mobile ou fixe)."
                        />
                        <FormControl>
                            <InputPhone
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
