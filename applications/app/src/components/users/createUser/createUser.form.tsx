import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputSwitch, InputText } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import * as v from "valibot"


export function CreateUserForm() {
    const form = useFormContext<v.Output<typeof auth.users.post.body>>()

    return (
        <Fragment>
            <FormField
                control={form.control}
                name="surname"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Nom"
                            tooltip="Le nom de la personne qui aura l'accès."
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
                name="forename"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Prénom"
                            tooltip="Le prénom de la personne qui aura l'accès."
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
                name="email"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Email de connexion"
                            tooltip="L'email de connexion pour l'accès."
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
            <FormField
                control={form.control}
                name="isAdmin"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Administrateur ?"
                            tooltip="Pour permettre à l'utilisateur de gérer les autres utilisateurs."
                            isRequired
                        />
                        <FormControl>
                            <InputSwitch
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
