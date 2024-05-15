import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputText } from "@coulba/design/inputs"
import { CircularLoader } from "@coulba/design/layouts"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useCompany } from "../../../contexts/company/useCompany"
import { router } from "../../../routes/router"
import { updateCompany } from "../../../services/api/auth/companies/updateCompany"
import { Form } from "../../layouts/forms/form"


export function UpdateCompanyForm() {
    const company = useCompany()

    if (company.isLoading) return <CircularLoader />
    if (!company.data) return null
    return (
        <Form
            validationSchema={auth.companies.put.body}
            defaultValues={company.data}
            cancelLabel="Retour"
            onCancel={() => router.navigate({ to: "/configuration/societe" })}
            submitLabel="Modifier les informations"
            onSubmit={async (data) => {
                await updateCompany({ body: data })

                company.mutate()

                router.navigate({ to: "/configuration/societe" })
                toast({ title: "Informations de la société mises à jour", variant: "success" })
                return true
            }}
        >
            {(form) => (
                <Fragment>
                    {/* <FormField
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
                    /> */}
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
