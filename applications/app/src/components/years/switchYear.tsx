import { ButtonOutline } from "@coulba/design/buttons"
import { toast } from "@coulba/design/overlays"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useCurrentYear } from "../../contexts/currentYear/useCurrentYear"
import { queryClient } from "../../contexts/state/queryClient"
import { switchYear } from "../../services/api/auth/years/switchYear"
import { yearsOptions } from "../../services/api/auth/years/yearsOptions"
import { YearCombobox } from "./input/yearCombobox"


export function SwitchYear() {
    const currentYear = useCurrentYear()
    const [idYear, setIdYear] = useState<string | undefined>(undefined)

    const mutation = useMutation({
        mutationKey: yearsOptions.queryKey,
        mutationFn: switchYear
    })

    if (!currentYear.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4 overflow-auto border border-neutral/20 rounded-md p-4">
            <div className="flex flex-col justify-start items-start gap-1">
                <h2 className="text-xl">Changer d'exercice</h2>
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
        </div>
    )
}
