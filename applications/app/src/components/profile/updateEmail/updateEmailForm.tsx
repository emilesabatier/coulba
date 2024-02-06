import { FormControl, FormError, FormField, FormItem, FormLabel } from "@monassosportive/design/forms"
import { InputPassword, InputText } from "@monassosportive/design/inputs"
import { DashboardProfile } from "@monassosportive/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"


export function UpdateEmailForm() {
    const form = useFormContext<DashboardProfile.UpdateEmailBody>()
    return (
        <Fragment>
            <FormField
                control={form.control}
                name="currentPassword"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Mot de passe actuel"
                            tooltip="Le mot de passe qui sert à actuellement à vous connecter."
                            isRequired
                        />
                        <FormControl>
                            <InputPassword
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
                name="emailAddressTemporary"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Nouvelle adresse email"
                            tooltip="Le nouvelemail de connexion pour votre compte."
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
