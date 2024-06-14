import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useSession } from "../../../contexts/session/useSession"
import { router } from "../../../routes/router"
import { updateProfile } from "../../../services/api/auth/profile/updateProfile"
import { Form } from "../../layouts/forms/form"


export function UpdateProfileForm() {
    const session = useSession()

    if (session.isLoading) return <CircularLoader />
    if (!session.profile) return null
    return (
        <Form
            validationSchema={auth.profile.put.body}
            defaultValues={session.profile}
            onCancel={() => router.navigate({ to: "/profil" })}
            submitLabel="Modifier"
            onSubmit={async (data) => {
                const response = await updateProfile({ body: data })
                if (!response) return false

                await session.mutate()
                router.navigate({ to: "/profil" })
                toast({ title: "Profil mis à jour", variant: "success" })

                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="alias"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Pseudonyme"
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
                </Fragment>
            )}
        </Form>
    )
}
