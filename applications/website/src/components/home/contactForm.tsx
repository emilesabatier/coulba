

import { ButtonPlain } from "@coulba/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormRoot } from "@coulba/design/forms"
import { InputArea, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { shared } from "@coulba/schemas/routes"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { sendMessage } from "../../services/api/shared/contact/sendMessage"


export function ContactForm() {

    const form = useForm<v.Output<typeof shared.contact.patch.sendMessage.body>>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: valibotResolver(shared.contact.patch.sendMessage.body),
    })

    const onSubmit = async () => {
        const data = form.getValues()

        if (!data.email) {
            toast({ title: "Aucun email renseigné", variant: "error" })
            return
        }

        const response = await sendMessage({ body: data })
        if (!response) return

        form.reset()
        toast({ title: "Message envoyé", variant: "success" })
    }

    return (
        <FormRoot {...form}>
            <form className="w-full max-w-[768px] flex flex-col justify-start items-center gap-2">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormControl>
                                <InputText
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Votre email"
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
                            <FormControl>
                                <InputArea
                                    value={field.value}
                                    onChange={field.onChange}
                                    placeholder="Votre message"
                                />
                            </FormControl>
                            <FormError />
                        </FormItem>
                    )}
                />
                <ButtonPlain
                    text="Envoyer le message"
                    // icon={<IconPlugConnected />}
                    onClick={() => onSubmit()}
                />
            </form>
        </FormRoot>
    )
}
