import { FormControl, FormError, FormField, FormItem, FormLabel } from "@monassosportive/design/forms"
import { InputText } from "@monassosportive/design/inputs"
import { DashboardAssociation } from "@monassosportive/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"


export function UpdateAssociationIdentityForm() {
    const form = useFormContext<DashboardAssociation.UpdateAssociationBody>()
    return (
        <Fragment>
            <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Nom"
                            tooltip="Le nom de l'association."
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
                name="description"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Description"
                            tooltip="La descrciption de l'association."
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
        </Fragment>
    )
}
