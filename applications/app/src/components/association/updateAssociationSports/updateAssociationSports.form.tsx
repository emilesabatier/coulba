import { FormControl, FormError, FormField, FormItem, FormLabel } from "@monassosportive/design/forms"
import { DashboardAssociation } from "@monassosportive/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import { SportsComboboxMultiple } from "../../sport/sportsComboboxMultiple"


export function UpdateAssociationSportsForm() {
    const form = useFormContext<DashboardAssociation.UpdateAssociationBody>()
    return (
        <Fragment>
            <FormField
                control={form.control}
                name="associationSports"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Sports effectués"
                            tooltip="Ajouter le ou les sports réalisés au sein de l'association."
                        />
                        <FormControl>
                            <SportsComboboxMultiple
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
