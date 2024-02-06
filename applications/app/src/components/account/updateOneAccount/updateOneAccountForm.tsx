import { FormControl, FormError, FormField, FormItem, FormLabel } from "@monassosportive/design/forms"
import { InputPhone, InputSwitch, InputText } from "@monassosportive/design/inputs"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import { CollaboratorCombobox } from "../../collaborator/collaboratorCombobox"
import { RoleCombobox } from "../../role/roleCombobox"



export function UpdateOneAccountForm() {
    const form = useFormContext<DashboardAccount.UpdateOneAccountBody>()
    return (
        <Fragment>
            <FormField
                control={form.control}
                name="isActive"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Activé ?"
                            tooltip="Le compte est activé à la création. Un compte doit être activé pour pouvoir se connecter."
                            isRequired
                        />
                        <FormControl>
                            <InputSwitch
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
                name="contact.surname"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Nom"
                            tooltip="Le nom de famille de l'utilisateur."
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
                            tooltip="Le prénom de l'utilisateur."
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
                            tooltip="Le numéro de téléphone de l'utilisateur (mobile ou fixe)."
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
            <FormField
                control={form.control}
                name="idCollaborator"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Collaborateur lié"
                            tooltip="Choisir le collaborateur lié au compte (non obligatoire)."
                        />
                        <FormControl>
                            <CollaboratorCombobox
                                value={field.value}
                                onChange={field.onChange}
                                filter={(value) => (value.account === null) || (value.id === form.formState.defaultValues?.idCollaborator)}
                            />
                        </FormControl>
                        <FormError />
                    </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="idRole"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Rôle"
                            tooltip="Choisir le rôle lié au compte."
                        />
                        <FormControl>
                            <RoleCombobox
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
