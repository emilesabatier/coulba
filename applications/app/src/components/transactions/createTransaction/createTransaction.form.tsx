import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputDateTime, InputPrice, InputText } from "@coulba/design/inputs"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { useFormContext } from "react-hook-form"
import * as v from "valibot"
import { AccountCombobox } from "../../accounts/accountCombobox"
import { AttachmentCombobox } from "../../attachments/attachmentCombobox"
import { JournalCombobox } from "../../journals/journalCombobox"


export function CreateTransactionForm() {
    const form = useFormContext<v.Output<typeof auth.transactions.post.body>>()
    return (
        <Fragment>
            <FormField
                control={form.control}
                name="label"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Libellé"
                            tooltip="Le libellé qui définit l'opération ajoutée."
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
                name="date"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Date"
                            tooltip="La date à laquelle l'opération a eu lieu."
                            isRequired
                        />
                        <FormControl>
                            <InputDateTime
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
                name="idAccount"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Compte"
                            tooltip="Le compte qui est mouvementé par l'enregistrement."
                            isRequired
                        />
                        <FormControl>
                            <AccountCombobox
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
                name="debit"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Débit"
                            tooltip="Le montant du débit si le compte est débiteur."
                            isRequired
                        />
                        <FormControl>
                            <InputPrice
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
                name="credit"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Crédit"
                            tooltip="Le montant du crédit si le compte est créditeur."
                            isRequired
                        />
                        <FormControl>
                            <InputPrice
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
                name="idJournal"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Journal"
                            tooltip="Le journal dans lequel s'inscrit l'enregistrement."
                        />
                        <FormControl>
                            <JournalCombobox
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
                name="idAttachment"
                render={({ field }) => (
                    <FormItem>
                        <FormLabel
                            label="Pièce justificative"
                            tooltip="Le fichier pour appuyer l'enregistrement."
                        />
                        <FormControl>
                            <AttachmentCombobox
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
