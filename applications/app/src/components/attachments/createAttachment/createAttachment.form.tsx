import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputFile, InputText } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import * as v from "valibot"


export function CreateAttachmentForm() {
    const form = useFormContext<v.Output<typeof auth.attachments.post.body> & { file?: File }>()

    return (
        <Fragment>
            <FormField
                control={form.control}
                name="file"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Fichier"
                            tooltip="La référence associée au document."
                            isRequired
                        />
                        <FormControl>
                            <InputFile
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
                name="reference"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Référence"
                            tooltip="La référence associée au document."
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
                name="label"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Libellé"
                            tooltip="Afin de mieux décrire le document."
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
