import { ButtonGhost, ButtonOutline } from "@coulba/design/buttons"
import { FormatNull } from "@coulba/design/formats"
import { CircularLoader } from "@coulba/design/layouts"
import { IconPencil, IconPlus, IconTrash } from "@tabler/icons-react"
import { useQuery } from "@tanstack/react-query"
import { computationsOptions } from "../../services/api/auth/computations/computationsOptions"
import { ErrorMessage } from "../layouts/errorMessage"
import { CreateComputation } from "./create/createComputation"
import { DeleteComputation } from "./delete/deleteComputation"
import { formatComputation } from "./format/formatComputation"
import { UpdateComputation } from "./update/updateComputation"


export function ComputationsList() {
    const computations = useQuery(computationsOptions)

    const sortedComputations = (computations.data ?? [])
        .sort((a, b) => a.number - b.number)

    if (computations.isLoading) return <CircularLoader />
    if (computations.isError) return <ErrorMessage message={computations.error.message} />
    if (!computations.data) return null
    return (
        <div className="w-full h-full flex flex-col justify-start items-stretch overflow-auto border border-neutral/20 rounded-md">
            <div className="w-full flex justify-between items-center p-4 border-b border-neutral/10 last:border-b-0">
                <CreateComputation>
                    <ButtonOutline
                        className="border-dashed"
                        icon={<IconPlus />}
                        text="Ajouter une opération"
                    />
                </CreateComputation>
            </div>
            {
                (!sortedComputations || sortedComputations?.length === 0) ? (<FormatNull />) : sortedComputations.map((computation) => {
                    return (
                        <div className="w-full flex justify-between items-center p-2 border-b border-neutral/5 last:border-b-0">
                            <div className="flex justify-start items-center gap-4 p-2">
                                <h2>{formatComputation(computation)}</h2>
                            </div>
                            <div className="flex justify-end items-center gap-1">
                                <UpdateComputation computation={computation}>
                                    <ButtonGhost
                                        icon={<IconPencil />}
                                    />
                                </UpdateComputation>
                                <DeleteComputation computation={computation}>
                                    <ButtonGhost
                                        icon={<IconTrash />}
                                        color="error"
                                    />
                                </DeleteComputation>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
