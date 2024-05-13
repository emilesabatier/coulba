import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormLabel, FormRoot } from "@coulba/design/forms"
import { InputPassword, InputSiren, InputText } from "@coulba/design/inputs"
import { toast } from "@coulba/design/overlays"
import { shared } from "@coulba/schemas/routes"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { useForm } from "react-hook-form"
import * as v from "valibot"
import { router } from "../../routes/router"
import { createCompany } from "../../services/api/shared/companies/createCompany"


export function SignUpForm() {
    const form = useForm<v.Output<typeof shared.companies.post.body>>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: valibotResolver(shared.companies.post.body),
    })

    const onSubmit = async () => {
        const triggerResponse = await form.trigger()
        if (!triggerResponse) return

        const response = await createCompany({
            body: form.getValues()
        })
        if (!response) return

        toast({ title: "Inscription réussie", variant: "success" })
        router.navigate({ from: "/inscription", to: "/" })
        window.location.reload()
    }

    return (
        <FormRoot {...form}>
            <form className="w-full flex flex-col justify-start items-center gap-x-2 gap-y-4">
                <div className="w-full flex flex-col justify-start items-stretch gap-4 p-4 rounded-md border border-dashed border-neutral/20">
                    <h2 className="text-lg text-neutral/50 uppercase">Informations sur la société</h2>
                    <div className="flex flex-col justify-start items-stretch gap-2">
                        <FormField
                            control={form.control}
                            name="siren"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="SIREN"
                                        isRequired
                                    />
                                    <FormControl>
                                        <InputSiren
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
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Nom"
                                        isRequired
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
                        <FormField
                            control={form.control}
                            name="address"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel
                                        label="Adresse"
                                        isRequired
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
                                        />
                                    </FormControl>
                                    <FormError />
                                </FormItem>
                            )}
                        />
                    </div>
                </div>
                <div className="w-full flex flex-col justify-start items-stretch gap-4 p-4 rounded-md border border-dashed border-neutral/20">
                    <h2 className="text-lg text-neutral/50 uppercase">Information sur le compte de connexion</h2>
                    <div className="flex flex-col justify-start items-stretch gap-2">
                        <div className="flex justify-center items-stretch gap-1">
                            <FormField
                                control={form.control}
                                name="user.surname"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            label="Nom"
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
                                name="user.forename"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            label="Prénom"
                                            isRequired
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
                        </div>
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
                </div>
                <div className="w-full flex justify-start items-center gap-1">
                    <Link to="/connexion">
                        <ButtonOutline
                            icon={<IconArrowLeft />}
                            text="Retour"
                            className="border-dashed"
                        />
                    </Link>
                    <ButtonPlain
                        onClick={() => onSubmit()}
                        text="Créer mon compte"
                        className="w-full justify-center"
                    />
                </div>
            </form>
        </FormRoot>
    )
}
