import { ButtonPlain } from "@coulba/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormRoot } from "@coulba/design/forms"
import { InputPassword } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { auth } from "@coulba/schemas/routes"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { useSession } from "../../contexts/session/useSession"
import { router } from "../../routes/router"
import { activate } from "../../services/api/auth/profile/activate"


export function ActivationForm() {
    const session = useSession()

    const form = useForm<v.Output<typeof auth.profile.patch.activate.body>>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: valibotResolver(auth.profile.patch.activate.body),
    })

    const onSubmit = async () => {
        const triggerResponse = await form.trigger()
        if (!triggerResponse) return

        const response = await activate({
            body: form.getValues()
        })

        if (response) {
            session.mutate()
            toast({ title: "Activation réussie", variant: "success" })
            router.navigate({ to: "/" })
        }
    }

    return (
        <FormRoot {...form}>
            <form className="min-w-[300px] w-full max-w-[50%] flex flex-col justify-start items-stretch gap-4">
                <div>
                    <h1 className="text-2xl">Activer votre compte</h1>
                    <p className="text-neutral/75">Veuillez choisir un mot de passe et valider afin d'activer définitivement votre compte utilisateur.</p>
                </div>
                <div className="flex flex-col justify-start items-stretch gap-2">
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel
                                    label="Mot de passe"
                                    tooltip="Le mot de passe souhaité."
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
                    <FormField
                        control={form.control}
                        name="passwordCheck"
                        render={({ field }) => (
                            <FormItem>
                                {/* <FormLabel
                                    label="Saisir le mot de passe à nouveau"
                                    tooltip="Le mot de passe souhaité (encore une fois)."
                                    isRequired
                                /> */}
                                <FormControl>
                                    <InputPassword
                                        value={field.value}
                                        onChange={field.onChange}
                                        placeholder="Mot de passe (encore)"
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="flex justify-end items-center gap-1">
                    <ButtonPlain
                        onClick={() => onSubmit()}
                        text="Activer mon compte"
                        className="w-full justify-center"
                    />
                </div>
            </form>
        </FormRoot>
    )
}
