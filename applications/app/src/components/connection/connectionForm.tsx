import { zodResolver } from "@hookform/resolvers/zod"
import { ButtonPlain } from "@monassosportive/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormLabel, FormRoot } from "@monassosportive/design/forms"
import { InputPassword, InputText } from "@monassosportive/design/inputs"
import { PublicSession, publicSchema } from "@monassosportive/schemas/routes"
import { useForm } from "react-hook-form"
import { useSession } from "../../contexts/session/useSession"


export function ConnectionForm() {
    const session = useSession()

    const form = useForm<PublicSession.SignInBody>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: zodResolver(publicSchema.session.signInBody),
    })

    const onSubmit = async () => {
        const triggerResponse = await form.trigger()
        if (!triggerResponse) return

        await session.signIn({
            body: {
                email: form.getValues().email,
                password: form.getValues().password
            }
        })
    }

    return (
        <FormRoot {...form}>
            <form className="flex flex-col justify-start items-stretch gap-8">
                <div className="flex flex-col justify-start items-stretch gap-2">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Email"
                                    isRequired
                                />
                                <FormControl>
                                    <InputText
                                        value={field.value}
                                        onChange={field.onChange}
                                        inputMode="email"
                                        autoFocus
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Mot de passe"
                                    isRequired
                                />
                                <FormControl>
                                    <InputPassword
                                        value={field.value}
                                        onChange={field.onChange}
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-row justify-end items-center gap-3">
                    <ButtonPlain
                        onClick={() => onSubmit()}
                        text="Se connecter"
                    />
                </div>
            </form>
        </FormRoot>
    )
}
