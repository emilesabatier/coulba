import { ButtonOutline } from "@coulba/design/buttons"
import { FormatBoolean } from "@coulba/design/formats"
import { toast } from "@coulba/design/overlays"
import { useCurrentYear } from "../../contexts/currentYear/useCurrentYear"
import { closeYear } from "../../services/api/auth/years/closeYear"
import { ConfirmDialog } from "../layouts/actions/confirmDialog"


export function CloseYear() {
    const currentYear = useCurrentYear()

    if (!currentYear.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch gap-4 overflow-auto border border-neutral/20 rounded-md p-4">
            <div className="flex flex-col justify-start items-start gap-1">
                <h2 className="text-xl">Figer les comptes</h2>
                <p className="text-neutral/75">Cela permet de clôturer l'exercice actuel et d'empêcher la saisie de nouvelles transactions.</p>
                <div className="flex justify-start items-center gap-2">
                    <span>Exercice actuel figé ?</span>
                    <FormatBoolean boolean={currentYear.data.isClosed} />
                </div>
            </div>
            <div className="flex justify-start items-center gap-1">
                {
                    currentYear.data.isClosed ? null
                        : (
                            <ConfirmDialog
                                title="Figer les comptes ?"
                                description={"Attention, cette action est définitive et empêche les futurs ajouts et modifications des saisies comptables."}
                                submitLabel="Figer"
                                color="error"
                                onSubmit={async () => {
                                    if (!currentYear.data) return false

                                    const response = await closeYear({ params: { idYear: currentYear.data.id } })
                                    if (!response) return false

                                    currentYear.mutate()
                                    toast({ title: "Exercice clôturé", variant: "success" })
                                    return true
                                }}
                            >
                                <ButtonOutline
                                    text="Figer les comptes pour l'année sélectionnée"
                                    className="shrink-0"
                                />
                            </ConfirmDialog>
                        )
                }
            </div>
        </div>
    )
}
