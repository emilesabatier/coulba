import { FormControl, FormError, FormField, FormItem, FormLabel } from "@coulba/design/forms"
import { InputArea, InputSelect } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { Fragment } from "react"
import { router } from "../../routes/router"
import { sendSupportMessage } from "../../services/api/auth/profile/sendSupportMessage"
import { Form } from "../layouts/forms/form"
import { ticketTypeOptions } from "./ticketOptions"


export function SendSupportMessageForm() {
    return (
        <Form
            validationSchema={auth.profile.patch.sendSupportMessage.body}
            defaultValues={{}}
            onCancel={() => router.navigate({ to: "/" })}
            submitLabel="Envoyer le message"
            onSubmit={async (data) => {
                const response = await sendSupportMessage({
                    body: data
                })
                if (!response) return false

                router.navigate({ to: "/" })
                toast({ title: "Message envoyé au support", variant: "success" })
                return true
            }}
        >
            {(form) => (
                <Fragment>
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Catégorie"
                                    tooltip="Pour renseigner le type du contenu."
                                />
                                <FormControl>
                                    <InputSelect
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Choisir la catégorie"
                                        options={ticketTypeOptions}
                                        autoFocus
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Message"
                                    tooltip="Le message que vous souhaitez nous envoyer."
                                    isRequired
                                />
                                <FormControl>
                                    <InputArea
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <p className="text-sm text-neutral">
                        Si jamais l'envoi ne fonctionne pas, vous pouvez nous contacter directement ici:&nbsp;
                        <a
                            href="mailto:support@coulba.fr"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-bold underline hover:no-underline"
                            aria-label="Contacter le support"
                        >
                            support@coulba.fr
                        </a>
                    </p>
                </Fragment>
            )}
        </Form>
    )
}
