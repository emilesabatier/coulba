import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { useMutation } from "@tanstack/react-query"
import { Fragment } from "react"
import { useCurrentYear } from "../../contexts/currentYear/useCurrentYear"
import { queryClient } from "../../contexts/state/queryClient"
import { router } from "../../routes/router"
import { switchYear } from "../../services/api/auth/years/patch/switchYear"
import { yearsOptions } from "../../services/api/auth/years/yearsOptions"
import { Form } from "../layouts/forms/form"
import { YearCombobox } from "./input/yearCombobox"


export function SwitchYear() {
    const currentYear = useCurrentYear()
    const mutation = useMutation({ mutationFn: switchYear })

    return (
        <Form
            validationSchema={auth.years.patch.switch.params}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/configuration/exercices" })}
            submitLabel="Sélectionner l'exercice"
            onSubmit={async (data) => {
                const response = await mutation.mutateAsync({
                    params: { idYear: data.idYear }
                })
                if (!response) return false

                queryClient.invalidateQueries({ queryKey: yearsOptions.queryKey })
                await currentYear.mutate()
                router.navigate({ to: "/configuration/exercices" })
                toast({ title: "L'exercice actuel a été changé", variant: "success" })

                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="idYear"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Exercice"
                                    tooltip="L'exercice qui sera sélectionné."
                                    isRequired
                                />
                                <FormControl>
                                    <YearCombobox
                                        value={field.value}
                                        onChange={field.onChange}
                                        filter={(year) => year.id !== currentYear.data?.id}
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
