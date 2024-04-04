import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputPassword } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { router } from "../../../routes/router"
import { updateProfilePassword } from "../../../services/api/auth/profile/updateProfilePassword"
import { Form } from "../../layouts/forms/form"


export function UpdateProfilePasswordForm() {
    return (
        <Form
            validationSchema={auth.profile.patch.updatePassword.body}
            defaultValues={{}}
            cancelLabel="Retour"
            onCancel={() => router.navigate({ to: "/profil" })}
            submitLabel="Modifier le mot de passe"
            onSubmit={async (data) => {
                const response = await updateProfilePassword({ body: data })
                if (!response) return false

                router.navigate({ to: "/profil" })
                toast({ title: "Mot de passe mis à jour", variant: "success" })

                return true
            }}
        >
            {(form) => (
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
                        name="newPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Nouveau mot de passe"
                                    tooltip="Le nouveau mot de passe souhaité."
                                    isRequired
                                />
                                <FormControl>
                                    <InputPassword
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
                        name="newPasswordCheck"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Saisir le nouveau mot de passe à nouveau"
                                    tooltip="Le nouveau mot de passe souhaité (encore une fois)."
                                    isRequired
                                />
                                <FormControl>
                                    <InputPassword
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
