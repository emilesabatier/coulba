

import { ButtonPlain } from "@coulba/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormRoot } from "@coulba/design/forms"
import { InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { PublicContact, publicSchema } from "@coulba/schemas/routes"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { sendContactEmail } from "../../services/routes/contact/sendContactEmail"


export function ContactForm() {

    const form = useForm<PublicContact.SendContactEmailBody>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: zodResolver(publicSchema.registration.createOneRegistrationBody),
    })

    const onSubmit = async () => {
        const data = form.getValues()

        if (!data.email) {
            toast({ title: "Aucun email renseigné", variant: "error" })
            return
        }

        const response = await sendContactEmail({ body: data })
        if (!response.status) {
            toast({ title: "Inscription impossible", variant: "error" })
            return
        }

        form.reset()
        toast({ title: "Inscription prise en compte", variant: "success" })
    }

    return (
        <FormRoot {...form}>
            <form className="w-full flex flex-wrap justify-start items-center gap-1">
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem className="w-fit">
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
                <ButtonPlain
                    text="S'inscrire"
                    // icon={<IconPlugConnected />}
                    onClick={() => onSubmit()}
                    className="min-w-fit"
                />
            </form>
        </FormRoot>
    )
}
