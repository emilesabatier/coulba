import { ButtonPlain } from "@coulba/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormRoot } from "@coulba/design/forms"
import { InputPassword, InputText } from "@coulba/design/inputs"
import { shared } from "@coulba/schemas/routes"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { useSession } from "../../contexts/session/useSession"
import { signIn } from "../../services/api/shared/sessions/signIn"


export function SignInForm() {
    const session = useSession()

    const form = useForm<v.Output<typeof shared.sessions.patch.signIn.body>>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: valibotResolver(shared.sessions.patch.signIn.body),
    })

    const onSubmit = async () => {
        const triggerResponse = await form.trigger()
        if (!triggerResponse) return

        const response = await signIn({
            body: {
                email: form.getValues().email,
                password: form.getValues().password
            }
        })
        if (!response) return

        await session.mutate()
        // toast({ title: "Connexion réussie", variant: "success" })
        // router.navigate({ to: "/" })
        window.location.reload()
    }

    return (
        <FormRoot {...form}>
            <form className="w-full flex flex-col justify-start items-stretch gap-6">
                <div className="flex flex-col justify-start items-stretch gap-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel
                                    label="Email"
                                    isRequired
                                /> */}
                                <FormControl>
                                    <InputText
                                        value={field.value}
                                        onChange={field.onChange}
                                        inputMode="email"
                                        autoFocus
                                        placeholder="Email"
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
                                {/* <FormLabel
                                    label="Mot de passe"
                                    isRequired
                                /> */}
                                <FormControl>
                                    <InputPassword
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Mot de passe"
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex flex-row justify-end items-center gap-3">
                    <ButtonPlain
                        onClick={async () => await onSubmit()}
                        text="Se connecter"
                        loader
                        className="w-full justify-center"
                    />
                </div>
            </form>
        </FormRoot>
    )
}
