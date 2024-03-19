import { ButtonOutline } from "@coulba/design/buttons"
import { toast } from "@coulba/design/overlays"
import { useMutation } from "@tanstack/react-query"
import { useState } from "react"
import { useCurrentYear } from "../../contexts/currentYear/useCurrentYear"
import { queryClient } from "../../contexts/state/queryClient"
import { switchYear } from "../../services/api/auth/years/switchYear"
import { yearOptions } from "../../services/api/auth/years/yearsOptions"
import { YearCombobox } from "./yearCombobox"


export function SwitchYear() {
    const currentYear = useCurrentYear()
    const [idYear, setIdYear] = useState<string | undefined>(undefined)

    const mutation = useMutation({
        mutationKey: yearOptions.queryKey,
        mutationFn: switchYear
    })

    if (!currentYear.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4 overflow-auto border border-neutral/25 rounded-sm p-4">
            <div className="flex flex-col justify-start items-start gap-1">
                <h2 className="text-xl">Exercice fiscal actuel</h2>
                <p className="text-neutral/75">Cela permet de changer l'exercice fiscal actuel dans l'application. C'est utile notamment pour consulter l'historique des exercices.</p>
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
                                queryClient.invalidateQueries({ queryKey: yearOptions.queryKey })
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
