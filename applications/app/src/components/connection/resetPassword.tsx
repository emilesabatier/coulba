import { zodResolver } from "@hookform/resolvers/zod"
import { Button, ButtonPlain, ButtonSubtle } from "@monassosportive/design/buttons"
import { FormControl, FormError, FormField, FormItem, FormLabel, FormRoot } from "@monassosportive/design/forms"
import { InputText } from "@monassosportive/design/inputs"
import { Card } from "@monassosportive/design/layouts"
import { Dialog, DialogContent, DialogHeader, DialogTrigger, SheetTitle, toast } from "@monassosportive/design/overlays"
import { PublicSession, publicSchema } from "@monassosportive/schemas/routes"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { resetPassword } from "../../services/routes/public/account/resetPassword"


export function ResetPassword() {
    const [open, setOpen] = useState(false)

    const form = useForm<PublicSession.SignInBody>({
        mode: "onSubmit",
        criteriaMode: "all",
        shouldFocusError: true,
        resolver: zodResolver(publicSchema.account.resetPasswordBody),
    })

    const onSubmit = async () => {
        const triggerResponse = await form.trigger()
        if (!triggerResponse) return

        const response = await resetPassword({ body: form.getValues() })
        if (!response.status) return

        toast({ title: "Email envoyé !", variant: "success" })

        form.reset({}, {
            keepValues: false,
            keepDirtyValues: false,
            keepDefaultValues: false
        })
        setOpen(false)
    }

    const onCancel = async () => setOpen(false)

    return (
        <Dialog open={open} onOpenChange={(open) => setOpen(open)}>
            <DialogTrigger asChild>
                <Button onClick={() => setOpen(true)}>
                    <span className="text-neutral text-sm underline hover:no-underline">Identifiants oubliés ?</span>
                </Button>
            </DialogTrigger>
            {!open ? null : (
                <DialogContent onInteractOutside={() => onCancel()} className="max-w-xs">
                    <DialogHeader>
                        <SheetTitle>Identifiants oubliés</SheetTitle>
                    </DialogHeader>
                    <Card variant="information" className="w-full">
                        <span className="text-information">Pour l'email associé à votre compte, rapprochez-vous de votre association.</span>
                    </Card>
                    <Card className="w-full flex flex-col justify-start items-start gap-2">
                        <span className="">Pour le mot de passe, veuillez renseigner l'email associé à votre compte pour recevoir un mot de passe temporaire.</span>
                        <FormRoot {...form}>
                            <form className="w-full overflow-hidden grid grid-rows-[auto_min-content] gap-4 md:gap-8">
                                <div className="flex flex-col justify-start items-stretch gap-2 md:gap-4 px-2 pt-2 md:px-4 md:pt-4 pb-1 overflow-y-auto overflow-x-hidden">
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
                                </div>
                                <div className="flex flex-row justify-end items-center gap-2">
                                    <ButtonSubtle onClick={() => onCancel()} text="Annuler" />
                                    <ButtonPlain
                                        onClick={() => onSubmit()}
                                        text="Recevoir le mot de passe temporaire"
                                    />
                                </div>
                            </form>
                        </FormRoot>
                    </Card>
                </DialogContent>
            )}
        </Dialog>
    )
}
