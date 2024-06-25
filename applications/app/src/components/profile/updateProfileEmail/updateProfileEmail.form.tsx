import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputPassword, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useSession } from "../../../contexts/session/useSession"
import { router } from "../../../routes/router"
import { updateProfileEmail } from "../../../services/api/auth/profile/updateProfileEmail"
import { Form } from "../../layouts/forms/form"


export function UpdateProfileEmailForm() {
    const session = useSession()

    if (session.isLoading) return <CircularLoader className="m-3" />
    if (!session.profile) return null
    return (
        <Form
            validationSchema={auth.profile.patch.updateEmail.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/profil" })}
            submitLabel="Modifier l'email"
            onSubmit={async (data) => {
                const response = await updateProfileEmail({ body: data })
                if (!response) return false

                await session.mutate()
                router.navigate({ to: "/profil" })
                toast({ title: "Un email de validation a été envoyé à la nouvelle adresse", variant: "success" })

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
                        name="emailToValidate"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Nouvelle adresse email"
                                    tooltip="Le nouvel email de connexion pour votre compte."
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
            )}
        </Form>
    )
}
