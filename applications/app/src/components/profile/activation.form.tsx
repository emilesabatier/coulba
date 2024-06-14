import { FormControl, FormError, FormField, FormItem } from "@coulba/design/forms"
import { InputPassword } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react/jsx-runtime"
import { useSession } from "../../contexts/session/useSession"
import { router } from "../../routes/router"
import { activate } from "../../services/api/auth/profile/activate"
import { Form } from "../layouts/forms/form"


export function ActivationForm() {
    const session = useSession()

    return (
        <Form
            validationSchema={auth.profile.patch.activate.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/" })}
            submitLabel="Activer mon compte"
            onSubmit={async (data) => {
                const response = await activate({ body: data })
                if (!response) return false

                await session.mutate()
                toast({ title: "Activation réussie", variant: "success" })
                router.navigate({ to: "/" })

                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel
                                    label="Mot de passe"
                                    tooltip="Le mot de passe souhaité."
                                    isRequired
                                /> */}
                                <FormControl>
                                    <InputPassword
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Mot de passe"
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="passwordCheck"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel
                                    label="Saisir le mot de passe à nouveau"
                                    tooltip="Le mot de passe souhaité (encore une fois)."
                                    isRequired
                                /> */}
                                <FormControl>
                                    <InputPassword
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Mot de passe (encore)"
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
