import { ButtonPlain } from "@coulba/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormLabel, FormRoot } from "@coulba/design/forms"
import { InputPassword, InputSelect, InputText } from "@coulba/design/inputs"
import { shared } from "@coulba/schemas/routes"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { useSession } from "../../contexts/session/useSession"
import { createOrganization } from "../../services/api/shared/organizations/createOrganization"
import { organizationTypeOptions } from "../organization/organizationTypeOptions"
import { router } from "../../routes/router"


export function SignUpForm() {
    const session = useSession()

    const form = useForm<v.Output<typeof shared.organizations.post.body>>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        defaultValues: {
            type: "company"
        },
        resolver: valibotResolver(shared.organizations.post.body),
    })

    const onSubmit = async () => {
        const triggerResponse = await form.trigger()
        if (!triggerResponse) return

        const response = await createOrganization({
            body: form.getValues()
        })
        if (!response) return


        await session.mutate()
        // toast({ title: "Inscription réussie", variant: "success" })
        router.navigate({ from: "/inscription", to: "/" })
        window.location.reload()
    }

    return (
        <FormRoot {...form}>
            <form className="w-full flex flex-col justify-start items-center gap-6">
                <div className="w-full flex flex-col justify-start items-stretch gap-3">
                    <FormField
                        control={form.control}
                        name="type"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Type d'organisation"
                                    tooltip="Le type de votre organisation (entreprise ou association)."
                                    isRequired
                                />
                                <FormControl>
                                    <InputSelect
                                        value={field.value}
                                        onChange={field.onChange}
                                        options={organizationTypeOptions}
                                    />
                                </FormControl>
                                <FormError />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="user.email"
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
                        name="user.password"
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
                    <FormField
                        control={form.control}
                        name="user.passwordCheck"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel
                                    label="Mot de passe (encore)"
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
                <div className="w-full flex justify-end items-center gap-1.5">
                    <ButtonPlain
                        onClick={() => onSubmit()}
                        loader={true}
                        text="Créer mon compte"
                    />
                </div>
            </form>
        </FormRoot>
    )
}
