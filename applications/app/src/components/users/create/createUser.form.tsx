import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputSwitch, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { createUser } from "../../../services/api/auth/users/createUser"
import { sendInvitation } from "../../../services/api/auth/users/sendInvitation"
import { usersOptions } from "../../../services/api/auth/users/usersOptions"
import { Form } from "../../layouts/forms/form"


export function CreateUserForm() {

    const mutation = useMutation({
        mutationKey: usersOptions.queryKey,
        mutationFn: createUser
    })

    return (
        <Form
            validationSchema={auth.users.post.body}
            defaultValues={{}}
            cancelLabel="Retour aux utilisateurs"
            onCancel={() => router.navigate({ to: "/configuration/utilisateurs" })}
            submitLabel="Ajouter l'utilisateur"
            onSubmit={async (data) => {

                mutation.mutate({ body: data }, {
                    onSuccess: async (newData) => {
                        if (!newData) return false
                        queryClient.invalidateQueries()
                        router.navigate({ to: "/configuration/utilisateurs" })
                        toast({ title: "Nouvel accès utilisateur ajouté", variant: "success" })

                        const response = await sendInvitation({ params: { idUser: newData.id } })
                        if (response) {
                            toast({ title: "Invitation envoyée", variant: "success" })
                        }
                    }
                })

                return true
            }}
        >
            {(form) => (
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
            )}
        </Form>
    )
}
