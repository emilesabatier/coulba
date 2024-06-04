import { ButtonOutline } from "@coulba/design/buttons"
import { FormatBoolean } from "@coulba/design/formats"
import { toast } from "@coulba/design/overlays"
import { useCurrentYear } from "../../contexts/currentYear/useCurrentYear"
import { closeYear } from "../../services/api/auth/years/closeYear"
import { ConfirmDialog } from "../layouts/actions/confirmDialog"
import { Section } from "../layouts/section/section"


export function CloseYear() {
    const currentYear = useCurrentYear()

    if (!currentYear.data) return null
    return (
        <Section.Root>
            <Section.Item className="flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-start items-start gap-1">
                    <Section.Title title="Figer les comptes" />
                    <p className="text-neutral/75">Cela permet de clôturer l'exercice actuel et d'empêcher la saisie de nouvelles rows.</p>
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
            </Section.Item>
        </Section.Root>
    )
}
