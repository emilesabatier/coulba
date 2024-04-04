import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputSwitch, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useParams } from "@tanstack/react-router"
import { Fragment } from "react"
import { queryClient } from "../../../contexts/state/queryClient"
import { updateUserRoute } from "../../../routes/auth/app/configuration/users/updateUser.route"
import { router } from "../../../routes/router"
import { updateUser } from "../../../services/api/auth/users/updateUser"
import { userOptions, usersOptions } from "../../../services/api/auth/users/usersOptions"
import { ErrorMessage } from "../../layouts/errorMessage"
import { Form } from "../../layouts/forms/form"


export function UpdateUserForm() {
    const { idUser } = useParams({ from: updateUserRoute.id })
    const user = useQuery(userOptions(idUser))

    const mutation = useMutation({
        mutationKey: usersOptions.queryKey,
        mutationFn: updateUser
    })

    if (user.isLoading) return <CircularLoader />
    if (user.isError) return <ErrorMessage message={user.error.message} />
    if (!user.data) return null
    return (
        <Form
            validationSchema={auth.users.put.body}
            defaultValues={user.data}
            onCancel={() => router.navigate({ to: "/configuration/utilisateurs" })}
            submitLabel="Modifier l'utilisateur"
            onSubmit={async (data) => {
                mutation.mutate({
                    params: { idUser: idUser },
                    body: data
                }, {
                    onSuccess: (data) => {
                        queryClient.setQueryData(usersOptions.queryKey, (_data) => _data && data && [data, ..._data.filter((user) => user.id !== data.id)])
                        router.navigate({ to: "/configuration/utilisateurs" })
                        toast({ title: "Utilisateur mis à jour", variant: "success" })
                        return true
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
