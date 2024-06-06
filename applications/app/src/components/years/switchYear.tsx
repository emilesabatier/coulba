import { ButtonOutline } from "@coulba/design/buttons"
import { toast } from "@coulba/design/overlays"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useCurrentYear } from "../../contexts/currentYear/useCurrentYear"
import { queryClient } from "../../contexts/state/queryClient"
import { switchYear } from "../../services/api/auth/years/switchYear"
import { yearsOptions } from "../../services/api/auth/years/yearsOptions"
import { Section } from "../layouts/section/section"
import { YearCombobox } from "./input/yearCombobox"


export function SwitchYear() {
    const currentYear = useCurrentYear()
    const [idYear, setIdYear] = useState<string | undefined>(undefined)

    const mutation = useMutation({
        mutationKey: yearsOptions.queryKey,
        mutationFn: switchYear
    })

    return (
        <Section.Root>
            <Section.Item className="flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-start items-start gap-1">
                    <Section.Title title="Changer d'exercice" />
                    <p className="text-neutral/75">Cela permet de changer l'exercice fiscal sélectionné dans l'application. C'est utile pour notamment consulter les données des exercices précédents.</p>
                </div>
                <div className="flex justify-start items-center gap-1">
                    <YearCombobox
                        value={idYear}
                        onChange={(idYear) => setIdYear(idYear ?? undefined)}
                        filter={(year) => year.id !== currentYear.data?.id}
                        className="w-fit"
                    />
                    <ButtonOutline
                        text="Changer l'exercice"
                        className="shrink-0"
                        onClick={async () => {
                            if (!idYear) {
                                toast({ title: "Vous devez sélectionner un exercice", variant: "error" })
                                return
                            }

                            mutation.mutate({ params: { idYear: idYear } }, {
                                onSuccess: () => {
                                    queryClient.invalidateQueries({ queryKey: yearsOptions.queryKey })
                                    currentYear.mutate()
                                    toast({ title: "L'exercice actuel a été changé", variant: "success" })
                                }
                            })
                        }}
                    />
                </div>
            </Section.Item>
        </Section.Root>
    )
}
