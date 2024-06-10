import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputSiren, InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useOrganization } from "../../../contexts/organization/useOrganization"
import { router } from "../../../routes/router"
import { updateOrganization } from "../../../services/api/auth/organizations/updateOrganization"
import { Form } from "../../layouts/forms/form"


export function UpdateOrganizationForm() {
    const organization = useOrganization()

    if (organization.isLoading) return <CircularLoader />
    if (!organization.data) return null
    return (
        <Form
            validationSchema={auth.organizations.put.body}
            defaultValues={organization.data}
            onCancel={() => router.navigate({ to: "/configuration/organisation" })}
            submitLabel="Modifier les informations"
            onSubmit={async (data) => {
                await updateOrganization({ body: data })

                organization.mutate()

                router.navigate({ to: "/configuration/organisation" })
                toast({ title: "Informations de l'organisation mises à jour", variant: "success" })
                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="siren"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Numéro de SIREN"
                                    tooltip="Le numéro officiel qui vous a été attribué à la création de l'entreprise."
                                    isRequired
                                />
                                <FormControl>
                                    <InputSiren
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
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Nom de l'entreprise"
                                    tooltip="Le nom ou la raison sociale de l'entreprise."
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
                                    label="Email"
                                    tooltip="L'email de contact de l'entreprise, sur lequel vous recevrez les informations relatives à l'utilisation de l'application."
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
