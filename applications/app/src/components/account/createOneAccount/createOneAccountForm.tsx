import { FormControl, FormError, FormField, FormItem, FormLabel } from "@monassosportive/design/forms"
import { InputPhone, InputSwitch, InputText } from "@monassosportive/design/inputs"
import { DashboardAccount } from "@monassosportive/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import { CollaboratorCombobox } from "../../collaborator/collaboratorCombobox"
import { RoleCombobox } from "../../role/roleCombobox"


export function CreateOneAccountForm() {
    const form = useFormContext<DashboardAccount.CreateOneAccountBody>()
    // const generateDefaultSignature = () => {
    //     if (!collaborators.data || !association.data) return

    //     const idCollaborator = getValues("idCollaborator")
    //     const collaborator = collaborators.data.find(x => x.id === idCollaborator)
    //     if (!collaborator) return setError("emailSignature", { message: "Aucun collaborateur choisi." })
    //     clearErrors("emailSignature")

    //     const defaultSignature = `<p dir="ltr"><span>Sportivement,</span><br><span>${capitalize(collaborator.forename)}</span><br><br><span>${capitalize(collaborator.forename)} ${capitalize(collaborator.surname)}</span>${!collaborator.phoneNumber ? "" : `<br><span>${collaborator.phoneNumber}</span>`}<br><span>${collaborator.email}</span><br><span>${association.data.name}</span></p>`

    //     setValue("emailSignature", defaultSignature)
    // }

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
                name="emailAddress"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Email de connexion"
                            tooltip="L'email de connexion de l'utilisateur."
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
                            tooltip="Choisir le collaborateur lié à l'utilisateur."
                        />
                        <FormControl>
                            <CollaboratorCombobox
                                value={field.value}
                                onChange={field.onChange}
                                filter={(value) => value.account === null}
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
                            tooltip="Choisir le rôle lié à l'utilisateur."
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
