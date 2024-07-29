import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDate, InputSwitch, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { useCurrentYear } from "../../../contexts/currentYear/useCurrentYear"
import { queryClient } from "../../../contexts/state/queryClient"
import { router } from "../../../routes/router"
import { createYear } from "../../../services/api/auth/years/createYear"
import { yearsOptions } from "../../../services/api/auth/years/yearsOptions"
import { Form } from "../../layouts/forms/form"
import { YearCombobox } from "../input/yearCombobox"


export function CreateYearForm() {
    const currentYear = useCurrentYear()
    const mutation = useMutation({ mutationFn: createYear })

    return (
        <Form
            validationSchema={auth.years.post.body}
            defaultValues={{
                isMinimalSystem: false
            }}
            onCancel={() => router.navigate({ to: "/configuration/exercices" })}
            submitLabel="Ajouter l'exercice"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    body: data
                })
                if (!response) return false

                await queryClient.invalidateQueries(yearsOptions)
                if (response.isSelected) await currentYear.mutate()
                router.navigate({ to: "/configuration/exercices" })
                toast({ title: "Nouvel exercice ajouté", variant: "success" })

                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="label"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Libellé"
                                    tooltip="Le libellé qui définit l'exercice ajoutée."
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
                        name="startingOn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Date de début"
                                    tooltip="La date à laquelle démarre l'exercice."
                                    isRequired
                                />
                                <FormControl>
                                    <InputDate
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
                        name="endingOn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Date de fin"
                                    tooltip="La date à laquelle finit l'exercice."
                                    isRequired
                                />
                                <FormControl>
                                    <InputDate
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
                        name="isMinimalSystem"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Système minimal ?"
                                    tooltip="Si activé, seuls les comptes du système minimal seront créés."
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
                    <FormField
                        control={form.control}
                        name="idPreviousYear"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Exercice précédent"
                                    tooltip="L'exercice qui précède chronologiquement."
                                />
                                <FormControl>
                                    <YearCombobox
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    {
                        !form.watch("idPreviousYear") ? null : (
                            <FormField
                                control={form.control}
                                name="isReplicatingAccounts"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            label="Répliquer les comptes de l'exercice précédent ?"
                                            tooltip="Si oui, réplique à l'identique. Si non, génère les comptes par défaut."
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
                        )
                    }
                </Fragment>
            )}
        </Form>
    )
}
