import { ButtonOutline } from "@coulba/design/buttons"
import { FormatBoolean } from "@coulba/design/formats"
import { toast } from "@coulba/design/overlays"
import { CurrentYearContext } from "../../contexts/currentYear/currentYear.context"
import { closeYear } from "../../services/api/auth/years/operations/closeYear"
import { ConfirmDialog } from "../layouts/actions/confirmDialog"
import { Section } from "../layouts/section/section"


type CloseYear = {
    currentYear: CurrentYearContext
}

export function CloseYear(props: CloseYear) {
    if (!props.currentYear.data) return null
    return (
        <Section.Root>
            <Section.Item className="flex-col justify-start items-start gap-3">
                <div className="flex flex-col justify-start items-start gap-1">
                    <Section.Title title="Figer les comptes" />
                    <p className="text-neutral/75">Cela permet de clôturer l'exercice actuel et d'empêcher la saisie de nouvelles rows.</p>
                    <div className="flex justify-start items-center gap-2">
                        <span>Exercice actuel figé ?</span>
                        <FormatBoolean boolean={props.currentYear.data.isClosed} />
                    </div>
                </div>
                <div className="flex justify-start items-center gap-1">
                    {
                        props.currentYear.data.isClosed ? null
                            : (
                                <ConfirmDialog
                                    title="Figer les comptes ?"
                                    description={"Attention, cette action est définitive et empêche les futurs ajouts et modifications des saisies comptables."}
                                    submitLabel="Figer"
                                    color="error"
                                    onSubmit={async () => {
                                        if (!props.currentYear.data) return false

                                        const response = await closeYear()
                                        if (!response) return false

                                        props.currentYear.mutate()
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
