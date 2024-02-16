import { ButtonPlain } from "@coulba/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormLabel, FormRoot } from "@coulba/design/forms"
import { InputPassword, InputText } from "@coulba/design/inputs"
import { shared } from "@coulba/schemas/routes"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { useSession } from "../../contexts/session/useSession"


export function ConnectionForm() {
    const session = useSession()

    const form = useForm<v.Output<typeof shared.sessions.signIn.body>>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: valibotResolver(shared.sessions.signIn.body),
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
