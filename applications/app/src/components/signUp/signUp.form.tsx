import { ButtonOutline, ButtonPlain } from "@coulba/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormLabel, FormRoot } from "@coulba/design/forms"
import { InputPassword, InputSiren, InputText } from "@coulba/design/inputs"
import { shared } from "@coulba/schemas/routes"
import { valibotResolver } from "@hookform/resolvers/valibot"
import { IconArrowLeft } from "@tabler/icons-react"
import { Link } from "@tanstack/react-router"
import { useForm } from "react-hook-form"
import * as v from "valibot"
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

        await createCompany({
            body: form.getValues()
        })
    }

    return (
        <FormRoot {...form}>
            <form className="w-full grid grid-cols-2 grid-rows-[auto_max-content] gap-x-2 gap-y-4">
                <div className="flex flex-col justify-start items-stretch gap-4 p-4 rounded-md border border-dashed border-neutral/20">
                    <h2 className="text-xl text-neutral/75">Informations sur la société</h2>
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
                <div className="flex flex-col justify-start items-stretch gap-4 p-4 rounded-md border border-dashed border-neutral/20">
                    <h2 className="text-xl text-neutral/75">Information sur le compte de connexion</h2>
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
                                name="user.forename"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel
                                            label="Prénom"
                                            isRequired
                                        />
                                        <FormControl>
                                            <InputSiren
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
                <div className="flex justify-start items-center gap-1">
                    <Link to="/connexion">
                        <ButtonOutline
                            icon={<IconArrowLeft />}
                            text="Retour"
                            className="border-dashed"
                        />
                    </Link>
                </div>
                <div className="flex justify-end items-center gap-1">
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
